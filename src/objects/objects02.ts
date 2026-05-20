export type User = {
  name: string;
  age: number;
  equal: (other: User) => boolean
};

export const user: User = {
  name: "John",
  age: 30,
  equal(other) {
    // Сравниваем имя и возраст текущего объекта с переданным
    return this.name === other.name && this.age === other.age;
  }
};
