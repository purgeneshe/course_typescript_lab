export function splitAndMergeStrings(strArr) {
  const result = [];

  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i];
    // Строки длиной 0 или 1 символ не делятся
    if (str.length <= 1) {
      result.push(str);
    } else {
      // Находим индекс деления. Использование Math.ceil округляет в большую сторону
      // для нечетной длины, что делает первую часть на 1 символ длиннее.
      const splitIndex = Math.ceil(str.length / 2);
      const firstPart = str.slice(0, splitIndex);
      const secondPart = str.slice(splitIndex);
      result.push(firstPart, secondPart);
    }
  }

  return result;
}

