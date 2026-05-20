const calculator = {
  previousValue: 0,
  add(value: number) {
    // Стрелочные функции не имеют собственного контекста 'this'.
    // Изменяем на обычный метод, чтобы 'this' указывал на объект calculator.
    return this.previousValue += value;
  }
};

export function add(value: number) {
  return calculator.add(value);
}
