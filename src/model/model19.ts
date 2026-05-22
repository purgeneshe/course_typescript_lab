export function Timestamped<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    timestamp: Date;
    constructor(...args: any[]) {
      super(...args);
      // Устанавливаем timestamp в момент создания
      this.timestamp = new Date();
    }

    // Возвращаем время в ISO-8601 формате
    getTimestamp(): string {
      return this.timestamp.toISOString();
    }
  };
}

export class Document {
  content: string = "";
}
