export class Animal {
  
  name: string;
  species: string;
  static animalCount = 0;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
    // Увеличиваем статический счётчик при каждом создании экземпляра
    Animal.animalCount++;
  }
  greet() {
    console.log(
      `Привет, меня зовут ${this.name}! Я представитель вида ${this.species}.`
    );
  }
  static getAnimalCount() {
    // Возвращаем текущее значение счётчика созданных животных
    return Animal.animalCount;
  }
}



