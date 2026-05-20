export type Summable = {
  sum: (other: Summable) => Summable;
};

export function sum<T extends Summable>(a: T[]): T {
  if (a.length === 0) {
    throw new Error("Array is empty");
  }

  let result = a[0];
  // Последовательно суммируем элементы с приведением к типу T
  for (let i = 1; i < a.length; i++) {
    result = result.sum(a[i]) as T;
  }
  return result;
}
