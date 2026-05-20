export type Address = {
  street: string;
  building: number;
  equal: (other: Address) => boolean;
};

export type User = {
  name: string;
  age: number;
  address: Address;
  equal: (other: User) => boolean;
};

const address: Address = {
  street: "Main Street",
  building: 123,
  equal(other: Address) {
    return (
      this.street === other.street &&
      this.building === other.building
    );
  },
};

export const user: User = {
  name: "John",
  age: 30,
  address: address,
  equal(other: User) {
    // Сравниваем поля name, age, а также вызываем equal для сравнения адреса
    return (
      this.name === other.name &&
      this.age === other.age &&
      this.address.equal(other.address)
    );
  },
};
