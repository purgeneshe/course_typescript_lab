export type Address = {
  street: string;
  building: number;
};

export type User = {
  name: string;
  age: number;
  address: Address;
  copy: (name?: string, age?: number, address?: Address) => User;
};

export const user: User = {
  name: "John",
  age: 30,
  address: { street: "Main Street", building: 123 },
  copy(name?: string, age?: number, address?: Address) {
    // Создаем глубокую копию адреса
    const newAddress = address
      ? { street: address.street, building: address.building }
      : { street: this.address.street, building: this.address.building };

    return {
      name: name ?? this.name,
      age: age ?? this.age,
      address: newAddress,
      copy: this.copy,
    };
  },
};
