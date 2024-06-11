import { redirect } from '@sveltejs/kit';

import { getUser } from '$lib/server/database.js';

export function load({ cookies }) {
  const email = cookies.get("user-email");

  if (!email || !getUser(email)) throw redirect(307, "/login");

  return {
    user: getUser(email)
  };
}