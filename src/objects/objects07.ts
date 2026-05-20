export type Comparable = {
  greaterThan: (other: Comparable) => boolean;
};

export function maxOf<T extends Comparable>(a: T[]): T {
  if (a.length === 0) {
    throw new Error("Array is empty");
  }

  let max = a[0];
  // Находим максимальный элемент по отношению greaterThan
  for (let i = 1; i < a.length; i++) {
    if (a[i].greaterThan(max)) {
      max = a[i];
    }
  }
  return max;
}