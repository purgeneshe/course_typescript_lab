import { describe, expect, it, vi } from "vitest";
import { fetchUserWithTimeout } from "./thread19";
import * as api from './promises';

describe('fetchUserWithTimeout', () => {
  it('должен возвращать пользователя при успешном выполнении', async () => {
    vi.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1, name: 'User 1' });
    
    const result = await fetchUserWithTimeout(1);
    expect(result).toEqual({ id: 1, name: 'User 1' });
  });

  it('должен отклонять promise при таймауте', async () => {
    // Мокаем fetchUser чтобы он никогда не резолвился
    vi.spyOn(api, 'fetchUser').mockImplementation(() => new Promise(() => {}));
    
    await expect(fetchUserWithTimeout(1, 10)).rejects.toThrow('Request timeout');
  });

  it('должен очищать таймаут при успешном выполнении', async () => {
    vi.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1, name: 'User 1' });
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');
    
    await fetchUserWithTimeout(1);
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});