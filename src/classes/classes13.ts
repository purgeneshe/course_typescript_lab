type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export class Lesson {
  day: WeekDay;
  private _number: number = 0;

  constructor(day: WeekDay, number: number) {
    this.day = day;
    this.number = number;
  }

  set number(n: number) {
    // Устанавливаем номер только если он в диапазоне 1-7, иначе 0
    if (n >= 1 && n <= 7) {
      this._number = n;
    } else {
      this._number = 0;
    }
  }

  get number(): number {
    return this._number;
  }
}
