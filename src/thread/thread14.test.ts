import { describe, expect, it, vi } from "vitest";
import { getUserPostsWithAuthor } from "./thread14";

describe('getUserPostsWithAuthor', () => {
  it('должен возвращать посты с авторами', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getUserPostsWithAuthor(1);
    expect(result).toEqual([
      { userId: 1, title: 'Post 1', author: { id: 1, name: 'User 1' } },
      { userId: 1, title: 'Post 2', author: { id: 1, name: 'User 1' } },
      { userId: 1, title: 'Post 3', author: { id: 1, name: 'User 1' } }
    ]);
  });

  it('должен отклонять promise при ошибке получения постов', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    await expect(getUserPostsWithAuthor(1)).rejects.toThrow('No posts found for user 1');
  });
});