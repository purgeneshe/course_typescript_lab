export const objectWithInnerFunction = {
  value: 10,
  getInnerFunction() {
    // Обычная функция теряет контекст при последующем вызове.
    // Возвращаем стрелочную функцию, чтобы сохранить лексическую привязку 'this'.
    return () => {
      return this.value; 
    };
  }
};
