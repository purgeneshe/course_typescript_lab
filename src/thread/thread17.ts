/* 
	Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  // TODO: Реализовать retry механизм
}
