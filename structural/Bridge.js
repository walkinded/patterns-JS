/* 
    Bridge - Мост

    Используется: "Разделяет 1 или несколько классов на несколько отдельных иерархий:
        1. Абстракция - специальная обертка, которая делегирует реализации;
        2. Реализация - объект в которой сама реализация.
        Что в свою очередь позволяет заменять их без зависим друг от друга."
    
    Пример: ---
*/

class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilbrigColor extends Color {
  constructor() {
    super('Silbermetallic');
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}

const blackBmw = new Bmw(new BlackColor());

blackBmw.paint(); // Auto: Bmw, Color dark-black
