import { describe, expect, it, vi } from "vitest";
import { getFastestUserData } from "./thread15";

describe('getFastestUserData', () => {
  it('должен возвращать результат первого завершившегося промиса', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getFastestUserData(1);
    // Может быть либо { id: 1, name: 'User 1' }, либо { id: 1, name: 'UserData 1' }
    expect(result.id).toBe(1);
    expect(result.name).toMatch(/User/);
  });

  it('должен отклонять promise при ошибке первого завершившегося промиса', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    
    await expect(getFastestUserData(1)).rejects.toThrow('Failed to fetch user 1');
  });
});