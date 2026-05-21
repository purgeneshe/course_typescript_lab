export class Student {
  static count = 0;
  first_name: string;
  last_name: string;
  constructor(first_name: string, last_name: string) {
	this.first_name = first_name;
	this.last_name = last_name;
    Student.count++;
  }

  // Заменяем статический метод info() на геттер
  static get info(): string {
    return `Всего ${Student.count} студентов`;
  }
}