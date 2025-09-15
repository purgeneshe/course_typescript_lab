/* 
	Дописать функцию getAllUserInfo, которая возвращает результаты всех запросов независимо от их успешности.
*/

import { fetchUser, fetchUserData, fetchUserPosts, fetchUserSettings } from "./promises";

export function getAllUserInfo(id: number): Promise<Array<PromiseSettledResult<any>>> {
  // TODO: Использовать Promise.allSettled для получения всех результатов
}
