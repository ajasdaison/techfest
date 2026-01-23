import { defineAction } from "astro:actions";
import { z } from "zod";
import { supabase } from "../lib/supabase";
import { createBEClient } from "../lib/supabase-admin"

const emailSignUp = async (
	{
		email,
	}: {
		email: string;
	},
	context: ActionAPIContext
) => {
	console.log("Sign up action");
	try {
		const supabase = createBEClient({
			request: context.request,
			cookies: context.cookies,
		});

		console.log("Request cookies:", context.request.headers.get("Cookie"));

		const { data, error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: "/api/exchange",
			},
		});

		if (error) {
			console.error("Sign up error", error);
			return {
				success: false,
				message: error.message,
			};
		} else {
			console.log("Sign up success", data);
			return {
				success: true,
				message: "Successfully logged in",
			};
		}
	} catch (err) {
		console.error("SignUp action other error", err);
		return {
			success: false,
			message: "Unexpected error",
		};
	}
};


export const server = {
  markAttended: defineAction({
  input: z.object({
    registrationId: z.string().uuid(),
    attended: z.boolean(),
  }),
  handler: async (input, context) => {
    const supabase = createBEClient({
      request: context.request,
      cookies: context.cookies,
    });

    const { error } = await supabase
      .from("registrations")
      .update({ attended: input.attended })
      .eq("id", input.registrationId);

    if (error) throw new Error(error.message);

    return { success: true };
  },
  }),


  signIn: defineAction({
		accept: "form",
		input: z.object({
			email: z.string().email(),
		}),
		handler: async (input, context) => {
			return emailSignUp(input, context);
		},
	}),

	signOut: defineAction({
		handler: async (_, context) => {
			const supabase = createBEClient({
				request: context.request,
				cookies: context.cookies,
			});
			const { error } = await supabase.auth.signOut();
			if (error) {
				console.error("Sign out error", error);
				return {
					success: false,
					message: error.message,
				};
			}
			return {
				success: true,
				message: "Successfully signed out",
			};
		},
	}),

  registerParticipant: defineAction({
    input: z.object({
      programSlug: z.string().min(1),
      participantName: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(10),
      college: z.string().optional(),
    }),
    handler: async (input) => {
      // 1. Get Program ID
      const { data: program, error: programError } = await supabase
        .from("programs")
        .select("id")
        .eq("slug", input.programSlug)
        .single();

      if (programError || !program) {
        throw new Error("Program not found");
      }

      // 2. Insert Registration
      const { error: insertError } = await supabase
        .from("registrations")
        .insert({
          program_id: program.id,
          participant_name: input.participantName,
          email: input.email,
          phone: input.phone,
          college: input.college ?? null,
        });

      if (insertError) throw new Error(insertError.message);

      return { success: true };
    },
  }),
};

