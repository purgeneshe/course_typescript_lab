export interface User {
  id: number;
  name: string;
}

export interface Post {
  userId: number;
  title: string;
}

export function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.25) {
        resolve({ id, name: `User ${id}` });
      } else {
        reject(new Error(`Failed to fetch user ${id}`));
      }
    }, 100);
  });
}

export const fetchUserData = (id: number): Promise<User> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.25) {
        resolve({ id, name: `UserData ${id}` });
      } else {
        reject(new Error(`User data not found for id ${id}`));
      }
    }, 150);
  });

export const fetchUserSettings = (id: number): Promise<{ theme: string }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.25) {
        resolve({ theme: "dark" });
      } else {
        reject(new Error(`Failed to load settings for user ${id}`));
      }
    }, 200);
  });

export function fetchUserPosts(userId: number): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.25) {
        resolve([
          { userId, title: "Post 1" },
          { userId, title: "Post 2" },
          { userId, title: "Post 3" }
        ]);
      } else {
        reject(new Error(`No posts found for user ${userId}`));
      }
    }, 250);
  });
}