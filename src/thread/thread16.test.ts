import { describe, expect, it, vi } from "vitest";
import { getAllUserInfo } from "./thread16";

describe('getAllUserInfo', () => {
  it('должен возвращать все результаты при успешном выполнении', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getAllUserInfo(1);
    
    expect(result).toHaveLength(4);
    expect(result[0].status).toBe('fulfilled');
    expect(result[1].status).toBe('fulfilled');
  });

  it('должен возвращать mixed результаты при частичных ошибках', async () => {
    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0.3) // успех
      .mockReturnValueOnce(0.1) // ошибка
      .mockReturnValueOnce(0.3) // успех
      .mockReturnValueOnce(0.1); // ошибка
    
    const result = await getAllUserInfo(1);
    
    expect(result).toHaveLength(4);
    expect(result.filter(r => r.status === 'fulfilled')).toHaveLength(2);
    expect(result.filter(r => r.status === 'rejected')).toHaveLength(2);
  });
});