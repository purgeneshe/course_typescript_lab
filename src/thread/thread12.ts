/* 
	Дописать функцию getUserProfile, которая параллельно получает пользователя, его данные и настройки.
*/

import { fetchUser, fetchUserData, fetchUserSettings } from "./promises";
import type { User } from "./thread07";

export function getUserProfile(id: number): Promise<{
  user: User;
  data: User;
  settings: { theme: string };
}> {
  // TODO: Реализовать параллельное выполнение трех запросов

}