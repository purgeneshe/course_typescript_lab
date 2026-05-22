export class Account {
  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    console.log(`Withdrawing ${amount}`);
  }
}

export class PremiumAccount extends Account {
  override withdraw(amount: number): void {
    // Сохраняем то же предусловие, что и в базовом классе
    if (amount <= 0) throw new Error("Amount must be positive");
    console.log(`Premium withdrawal: ${amount}`);
  }
}
