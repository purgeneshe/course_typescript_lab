export const user = {
  name: 'Алексей',
  greeting() {
    // В обычной функции 'function()' контекст 'this' теряется при вызове без объекта (externalFn()).
    // Использование стрелочной функции '() =>' сохраняет лексический контекст 'this' окружающего метода greeting.
    const externalFn = () => {
      console.log(`Привет, меня зовут ${this.name}`);
    };
    externalFn();
  }
};