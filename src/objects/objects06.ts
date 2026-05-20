export type User = {
  name: string;
  age: number;
  role: string[];
  equal: (other: User) => boolean;
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  equal(other: User) {
    // Сравниваем имя и возраст
    if (this.name !== other.name || this.age !== other.age) {
      return false;
    }
    // Сравниваем длины массивов ролей
    if (this.role.length !== other.role.length) {
      return false;
    }
    // Сравниваем элементы массивов ролей по индексу
    for (let i = 0; i < this.role.length; i++) {
      if (this.role[i] !== other.role[i]) {
        return false;
      }
    }
    return true;
  },
};
