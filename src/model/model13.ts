export class Bird {
  fly(): Bird {
    console.log("Flying");
    return this;
  }
}

export class Penguin extends Bird {
  // Переопределяем fly, возвращаем Penguin (для совместимости по типу) и выводим "Cannot fly"
  override fly(): Penguin {
    console.log("Cannot fly");
    return this;
  }
}
