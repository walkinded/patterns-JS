/* 
    Visitor - Посетитель

    Используется: "Добавляет новую функциональность в уже существующий класс не изменняя исходный код класса.
        Расширяет функциональность класса не изменяя его первоначальную реализацию."
    
    Пример: При расширении функционала
*/

class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}

class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}

class Audi extends Auto {
  info() {
    return 'It is an Audi car!';
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Bmw)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Audi)
    auto.export = console.log(`Exported data: ${auto.info()}`);
}

const tesla = new Tesla();
const bmw = new Bmw();

console.log(tesla.accept(exportVisitor)); // Exported data: It is a Tesla car!
console.log(bmw.accept(exportVisitor)); // Exported data: It is a BMW car!
