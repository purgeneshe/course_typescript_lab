export type User = {
  name: string;
  age: number;
  copy: (name?: string, age?: number) => User
};

export const user: User = {
  name: "John",
  age: 30,
  copy(name?: string, age?: number) {
    // Возвращаем копию объекта с новыми значениями свойств
    return {
      name: name ?? this.name,
      age: age ?? this.age,
      copy: this.copy,
    };
  },
};
