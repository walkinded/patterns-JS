/* 
    Factory Method - Фабричный метод 

    Используется: "Когда нужно создавать множество однотивных объектов.
        Объекты с одинаковой структурой, но разными данными.""
    
    Пример: ---
*/
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5') return new Bmw(type, 108000, 300);
    if (type === 'X6') return new Bmw(type, 111000, 320);
  }
}
