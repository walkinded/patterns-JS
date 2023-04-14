/* 
    Adapter - Адаптер

    Используется: "Оборачивает несовместимый объек с совместимым."
    
    Пример: ---
*/

class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8! - wroom wroom!');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

const car1 = new Auto();
const oldEngine = new Engine2();
car1.startEngine(oldEngine); // Engine 2.0 - tr-tr-tr

const car2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());
car2.startEngine(Engine2); // Engine V8! - wroom wroom!

const car3 = new Auto();
const engineAdapter3 = new EngineV8();

car3.startEngine(Engine2); // error
