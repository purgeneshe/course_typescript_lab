const calculator = {
  previousValue: 0,
  add(value: number) {
    return this.previousValue += value;
  }
};

export function add(value: number) {
  // Присваивание метода переменной приводит к потере контекста 'this'.
  // Привязываем контекст calculator с помощью bind.
  const adder = calculator.add.bind(calculator);
  return adder(value); 	
}
