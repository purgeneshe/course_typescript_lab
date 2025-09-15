import { describe, expect, it, vi } from "vitest";
import { getSafeUserSettings } from "./thread13";

describe('getSafeUserSettings', () => {
  it('должен возвращать настройки при успешном выполнении', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3);
    const result = await getSafeUserSettings(1);
    expect(result).toEqual({ theme: 'dark' });
  });

  it('должен возвращать настройки по умолчанию при ошибке', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    const result = await getSafeUserSettings(1);
    expect(result).toEqual({ theme: 'light' });
  });
});