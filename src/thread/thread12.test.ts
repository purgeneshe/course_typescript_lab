import { describe, expect, it, vi } from "vitest";
import { getUserProfile } from "./thread12";

describe('getUserProfile', () => {
  it('должен возвращать полный профиль при успешном выполнении', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getUserProfile(1);
    expect(result).toEqual({
      user: { id: 1, name: 'User 1' },
      data: { id: 1, name: 'UserData 1' },
      settings: { theme: 'dark' }
    });
  });

  it('должен отклонять promise при любой ошибке', async () => {
    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0.3) // fetchUser успешен
      .mockReturnValueOnce(0.1) // fetchUserData ошибка
      .mockReturnValueOnce(0.3); // fetchUserSettings успешен
    
    await expect(getUserProfile(1)).rejects.toThrow('User data not found for id 1');
  });
});