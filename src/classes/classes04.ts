export class Point {
    coords: number[];
    constructor(x: number, y: number);
    constructor(coords: [number, number]);
    constructor(...args: any[]) {
        // Обрабатываем перегрузки: если первый аргумент число - берём два, иначе - массив
        if (typeof args[0] === 'number') {
            this.coords = [args[0], args[1]];
        } else {
            this.coords = args[0];
        }
    }
}
