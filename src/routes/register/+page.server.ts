import { fail, redirect, type ActionFailure } from '@sveltejs/kit';
import { z } from 'zod';

import { createUser } from '$lib/server/database.js';
import type { FormActionFail } from '../../types/form-action.js';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.coerce.string().min(8),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
})

export const actions = {
  default: async ({ request }): Promise<ActionFailure<FormActionFail<z.infer<typeof registerSchema>>>> => {
    const values = await request.formData()

    const user = {
      email: String(values.get("email")),
      password: String(values.get("password")),
      firstName: String(values.get("firstName")),
      lastName: String(values.get("lastName")),
    };

    const parsedUser = registerSchema.safeParse(user);

    if (!parsedUser.success) {
      return fail(400, { issues: parsedUser.error.issues, data: user })
    }

    createUser(parsedUser.data);

    throw redirect(303, "/login")
  }
}