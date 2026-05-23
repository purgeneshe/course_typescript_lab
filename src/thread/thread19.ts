import { fetchUser, type User } from "./promises";

export function fetchUserWithTimeout(id: number, timeout = 100): Promise<User> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request timeout'));
    }, timeout);

    fetchUser(id)
      .then((user) => {
        clearTimeout(timer);
        resolve(user);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}
