type User = { email: string, password: string, firstName: string, lastName: string };

const db = new Map<string, User>();

export function getUser(email: string) {
	return db.get(email);
}

export function createUser(user: User) {
	db.set(user.email, user);
}

export function deleteUser(userId: string) {
  db.delete(userId);
}