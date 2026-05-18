export function capitalize_words(sentence) {
  const words = sentence.split(' ');
  // В цикле обходим все слова и делаем первую букву заглавной, если слово не пустое
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(' ');
}
