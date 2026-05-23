import { fetchUser, fetchUserPosts, type Post, type User } from "./promises";

export async function getUserPostsWithAuthor(userId: number): Promise<Array<Post & { author: User }>> {
  // Сначала получаем посты пользователя
  const posts = await fetchUserPosts(userId);

  // Для каждого поста параллельно получаем информацию об авторе
  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => {
      const author = await fetchUser(post.userId);
      return { ...post, author };
    })
  );

  return postsWithAuthors;
}
