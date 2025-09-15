/* 
	Дописать функцию getUserWithData, которая сначала получает пользователя, затем его данные и возвращает объект { user: User, data: User }.
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export function getUserWithData(id: number): Promise<{ user: User; data: User }> {
  // TODO: Реализовать последовательное получение пользователя и его данных

}