export function Loggable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    // Добавляем метод log
    log(message: string): void {
      console.log(`[LOG]: ${message}`);
    }
  };
}

export class User {
  name: string = '';
}

export const LoggableUser = Loggable(User);