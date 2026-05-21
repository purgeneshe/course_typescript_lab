export class Task {
    title: string;
    done: boolean;
    constructor(title: string);
    constructor(title: string, done: boolean);
    constructor(title: string, done?: boolean) {
        // Инициализируем title и done (если done не передан - false по умолчанию)
        this.title = title;
        this.done = done ?? false;
    }
}