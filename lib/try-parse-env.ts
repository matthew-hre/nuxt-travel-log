/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod";

import { ZodError } from "zod";

export function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";
      error.errors.forEach((err) => {
        message += `${err.path[0]}\n`;
      });
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      console.error("An unexpected error occurred while parsing environment variables:", error);
    }
    process.exit(1);
  }
}
