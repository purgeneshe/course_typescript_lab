export class Logger {
  log(message: string): void {
    if (!message) throw new Error("Message cannot be empty");
    console.log(message);
  }
}

export class SafeLogger extends Logger {
  override log(message: string): void {
    // Ослабляем постусловие: при пустом сообщении просто не логируем, без исключения
    if (!message) return;
    console.log(message);
  }
}
