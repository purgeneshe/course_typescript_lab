export const user = {
  profile: { name: 'Alice', age: 30 },
  uppercaseProfileNames() {
    // Возвращаем новый объект, создавая глубокую копию profile и переводя name в верхний регистр
    return {
      ...this,
      profile: {
        ...this.profile,
        name: this.profile.name.toUpperCase(),
      },
    };
  },
};