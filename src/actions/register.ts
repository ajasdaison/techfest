import { defineAction } from "astro:actions";
import { z } from "zod";
import { supabase } from "../lib/supabase";

export const server = {
  registerParticipant: defineAction({
    input: z.object({
      programSlug: z.string().min(1),
      participantName: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(6),
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
