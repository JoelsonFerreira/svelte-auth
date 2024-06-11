import { fail, redirect, type ActionFailure } from '@sveltejs/kit';
import { z } from 'zod';

import { getUser } from '$lib/server/database.js';
import type { FormActionFail } from '../../types/form-action.js';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.coerce.string().min(8),
})

export const actions = {
  default: async ({ cookies, request }): Promise<ActionFailure<FormActionFail<z.infer<typeof loginSchema>>>> => {
    const values = await request.formData()

    const user = {
      email: String(values.get("email")),
      password: String(values.get("password")),
    };

    const parsedUser = loginSchema.safeParse(user);

    if (!parsedUser.success) {
      return fail(400, { issues: parsedUser.error.issues, data: user })
    }

    const userRegistered = getUser(user.email)

    if (user?.password === userRegistered?.password) {
      cookies.set("user-email", user.email, { path: "/" });

      throw redirect(303, "/")
    }

    return fail(401, {
      issues: [{
        fatal: false,
        message: "Email e/ou senha inválidos.",
        path: [],
        code: "custom"
      }], 
      data: user
    });
  },
}