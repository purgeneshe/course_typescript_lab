export const point = {
  x: 0,
  y: 0,
  move: function (dx: number, dy: number) {
    // Сдвигаем текущие координаты x и y на заданные величины dx и dy
    this.x += dx;
    this.y += dy;
  },
};
