export class Database {
  save(data: object): void {
    console.log("Saving object");
  }
}

export class UserDatabase extends Database {
  // Переопределяем save с более широким типом (any), чтобы принимать любые данные
  override save(data: any): void {
    console.log("Saving any data");
  }
}