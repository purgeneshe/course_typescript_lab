import { describe, it, expect, vi } from 'vitest';
import { getUserWithData } from './thread11';

describe('getUserWithData', () => {
  it('должен возвращать пользователя и его данные при успешном выполнении', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getUserWithData(1);
    expect(result).toEqual({
      user: { id: 1, name: 'User 1' },
      data: { id: 1, name: 'UserData 1' }
    });
  });

  it('должен отклонять promise при ошибке в fetchUser', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    await expect(getUserWithData(1)).rejects.toThrow('Failed to fetch user 1');
  });
});