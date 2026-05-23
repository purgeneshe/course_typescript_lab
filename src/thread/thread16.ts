import { fetchUser, fetchUserData, fetchUserPosts, fetchUserSettings } from "./promises";

export function getAllUserInfo(id: number): Promise<Array<PromiseSettledResult<any>>> {
  // Используем Promise.allSettled, чтобы получить результаты всех запросов, даже если некоторые упали
  return Promise.allSettled([
    fetchUser(id),
    fetchUserData(id),
    fetchUserPosts(id),
    fetchUserSettings(id),
  ]);
}
