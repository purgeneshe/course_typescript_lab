export function check_leap_year(year) {
  // Год является високосным, если он делится на 4 и не делится на 100,
  // или делится на 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
