import type { z } from "zod";

export type FormActionFail<T> = {
  issues: z.ZodIssue[];
  data: T;
}