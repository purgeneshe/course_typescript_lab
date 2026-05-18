export function palindrome_check(word) {
  // Разворачиваем строку и сравниваем её с оригинальной
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
