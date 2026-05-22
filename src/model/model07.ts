interface Swimmable {
  swim(): void;
}

interface Diveable {
  dive(): void;
}

export class Duck implements Swimmable, Diveable {
  // Реализуем swim из Swimmable
  swim(): void {
    console.log("Duck is swimming");
  }

  // Реализуем dive из Diveable
  dive(): void {
    console.log("Duck is diving");
  }
}
