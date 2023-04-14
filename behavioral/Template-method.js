/* 
    Template Method - Шаблонный метод

    Используется: "Определяет базовые шаги исполнения алгоритма
        и выполнения каждого из этих шагов делегиреут на соответствующие методы
        или подклассы."
    
    Пример: ---
*/
class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Electronic Engine');
  }

  installChassis() {
    console.log('Install Tesla chassis');
  }

  addElectronic() {
    console.log('Add special electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine');
  }

  installChassis() {
    console.log('Install BMW chassis');
  }

  addElectronic() {
    console.log('Add electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
}
