export abstract class Logger {
  abstract log(message: string): void;

  // Реализованный метод error, который вызывает log
  error(message: string): void {
    this.log(`ERROR: ${message}`);
  }
}

