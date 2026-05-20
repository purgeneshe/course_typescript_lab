export type User = {
  name: string;
  age: number;
  role: string[];
  copy: (name?: string, age?: number, role?: string[]) => User;
};

export const user: User = {
  name: "John",
  age: 30,
  role: ["admin", "user"],
  copy(name?: string, age?: number, role?: string[]): User {
    // Создаем глубокую копию массива role
    const nextRole = role ? [...role] : [...this.role];

    return {
      name: name ?? this.name,
      age: age ?? this.age,
      role: nextRole,
      copy: this.copy,
    };
  },
};
