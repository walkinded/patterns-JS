/* 
    Facade - Фасад

    Используется: "Нужен для скрытия сложной логики под фасадом
        и выдать простой способ манипуляции(интерфейс использования)."
    
    Пример: ---
*/

class Сonveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle Engine!');
  }

  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Exterior added!');
  }

  changeInterior() {
    console.log('Update interior!');
  }

  setExterior() {
    console.log('Added interior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics!');
  }

  paint() {
    console.log('Car painted!');
  }
}

class СonveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }
}

const conveyor = new СonveyorFacade(new Сonveyor());

const car = conveyor.assembleCar();
