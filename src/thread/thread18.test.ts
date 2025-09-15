import { describe, expect, it, vi } from "vitest";
import { getUserWithFallback } from "./thread18";

describe('getUserWithFallback', () => {
  it('должен возвращать пользователя при успешном fetchUser', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getUserWithFallback(1);
    expect(result).toEqual({ id: 1, name: 'User 1' });
  });

  it('должен возвращать данные пользователя при ошибке fetchUser', async () => {
    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1) // fetchUser ошибка
      .mockReturnValueOnce(0.3); // fetchUserData успешен
    
    const result = await getUserWithFallback(1);
    expect(result).toEqual({ id: 1, name: 'UserData 1' });
  });

  it('должен отклонять promise при ошибке обоих запросов', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    await expect(getUserWithFallback(1)).rejects.toThrow('User data not found for id 1');
  });
});