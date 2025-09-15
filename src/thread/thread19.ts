/* 
	Дописать функцию fetchUserWithTimeout, которая отклоняет промис, если запрос занимает больше 100ms.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithTimeout(id: number, timeout = 100): Promise<User> {
  // TODO: Добавить таймаут для промиса

}
