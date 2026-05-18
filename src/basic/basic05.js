export function grade_student(score) {
  // Определяем оценку в зависимости от диапазона баллов
  switch (true) {
    case score < 60:
      return 'неудовлетворительно';
    case score <= 74:
      return 'удовлетворительно';
    case score <= 89:
      return 'хорошо';
    default:
      return 'отлично';
  }
}
