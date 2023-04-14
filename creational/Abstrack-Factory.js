/* 
    Abstrack Factory - Абстрактная фабрика

    Используется: "Когда нужно создавать интерфейс группирующий другие фобрики,
        которые логически связаны друг с другом.""
    
    Пример: ---
*/
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return 'Z4 is a Sport car!';
  }
}

class I3 {
  info() {
    return 'i3 is a Family car!';
  }
}
