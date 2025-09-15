import { describe, expect, it, vi } from "vitest";
import { fetchUserWithRetry } from "./thread17";

describe('fetchUserWithRetry', () => {
  it('должен возвращать пользователя при успехе с первой попытки', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await fetchUserWithRetry(1);
    expect(result).toEqual({ id: 1, name: 'User 1' });
  });

  it('должен отклонять promise после 3 неудачных попыток', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    await expect(fetchUserWithRetry(1)).rejects.toThrow('Failed to fetch user 1');
  });
});