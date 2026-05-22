abstract class DataStorage {
  abstract save(data: string): void;
  abstract load(): string;
}

export class MemoryStorage extends DataStorage {
  private data: string = "";

  // Сохраняем данные в приватное поле
  save(data: string): void {
    this.data = data;
  }

  // Возвращаем сохранённые данные
  load(): string {
    return this.data;
  }
}
