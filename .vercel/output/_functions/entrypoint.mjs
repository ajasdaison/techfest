import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_CD-0xSos.mjs';
import 'piccolore';
import 'es-module-lexer';
import './chunks/astro/server_DfGMZ1H6.mjs';
import 'clsx';
import { z } from 'zod';
import { s as supabase } from './chunks/supabase_raZd2PF0.mjs';
import { c as createBEClient } from './chunks/supabase-admin_B89kAoRZ.mjs';
import { a as defineAction } from './chunks/index_Bd9iJzjS.mjs';

const internalFetchHeaders = {};

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // redefine prototype methods as the object's own property, not the prototype's
        bind: action.bind,
        valueOf: () => action.valueOf,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function _getActionPath(toString) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  for (const [key, value] of Object.entries(internalFetchHeaders)) {
    headers.set(key, value);
  }
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    _getActionPath(() => getActionQueryString(path)),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  const bodyText = await rawResult.text();
  if (rawResult.ok) {
    return deserializeActionResult({
      type: "data",
      body: bodyText,
      status: 200,
      contentType: "application/json+devalue"
    });
  }
  return deserializeActionResult({
    type: "error",
    body: bodyText,
    status: rawResult.status,
    contentType: "application/json"
  });
}
toActionProxy();

const emailSignUp = async ({
  email
}, context) => {
  console.log("Sign up action");
  try {
    const supabase2 = createBEClient({
      request: context.request,
      cookies: context.cookies
    });
    console.log("Request cookies:", context.request.headers.get("Cookie"));
    const { data, error } = await supabase2.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:4321/api/exchange"
      }
    });
    if (error) {
      console.error("Sign up error", error);
      return {
        success: false,
        message: error.message
      };
    } else {
      console.log("Sign up success", data);
      return {
        success: true,
        message: "Successfully logged in"
      };
    }
  } catch (err) {
    console.error("SignUp action other error", err);
    return {
      success: false,
      message: "Unexpected error"
    };
  }
};
const server = {
  markAttended: defineAction({
    input: z.object({
      registrationId: z.string().uuid(),
      attended: z.boolean()
    }),
    handler: async (input, context) => {
      const supabase2 = createBEClient({
        request: context.request,
        cookies: context.cookies
      });
      const { error } = await supabase2.from("registrations").update({ attended: input.attended }).eq("id", input.registrationId);
      if (error) throw new Error(error.message);
      return { success: true };
    }
  }),
  signIn: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email()
    }),
    handler: async (input, context) => {
      return emailSignUp(input, context);
    }
  }),
  signOut: defineAction({
    handler: async (_, context) => {
      const supabase2 = createBEClient({
        request: context.request,
        cookies: context.cookies
      });
      const { error } = await supabase2.auth.signOut();
      if (error) {
        console.error("Sign out error", error);
        return {
          success: false,
          message: error.message
        };
      }
      return {
        success: true,
        message: "Successfully signed out"
      };
    }
  }),
  registerParticipant: defineAction({
    input: z.object({
      programSlug: z.string().min(1),
      participantName: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(10),
      college: z.string().optional()
    }),
    handler: async (input) => {
      const { data: program, error: programError } = await supabase.from("programs").select("id").eq("slug", input.programSlug).single();
      if (programError || !program) {
        throw new Error("Program not found");
      }
      const { error: insertError } = await supabase.from("registrations").insert({
        program_id: program.id,
        participant_name: input.participantName,
        email: input.email,
        phone: input.phone,
        college: input.college ?? null
      });
      if (insertError) throw new Error(insertError.message);
      return { success: true };
    }
  })
};

export { server };
