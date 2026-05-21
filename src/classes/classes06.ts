export class Counter {
    static count = 0;
    constructor() {
        Counter.count++;
    }
    static getCurrentCount() {
        // Возвращаем текущее значение статического счётчика
        return Counter.count;
    }
}
