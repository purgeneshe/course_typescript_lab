export function count_vowels(s) {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  let count = 0;
  let i = 0;

  // Проходим по всей строке
  while (i < s.length) {
    const char = s[i].toLowerCase(); // Приводим символ к нижнему регистру
    if (vowels.includes(char)) {
      count++; // Увеличиваем счетчик при совпадении с гласной
    }
    i++;
  }

  return count;
}
