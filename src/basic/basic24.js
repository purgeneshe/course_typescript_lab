export function replace_word(sentence, old_word, new_word) {
  if (old_word === '') return sentence;
  // Заменяем старое слово новым
  return sentence.split(old_word).join(new_word);
}
