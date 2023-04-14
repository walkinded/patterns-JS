/* 
    Singleton - Одиночка 

    У класса может быть только 1 экземпляр

    "Настолько часто использовали что стал антипаттерном"

    Используется: "Нужен каждый раз, когда в системе должен 
        быт объект в едином экземпляре и к которому нужне доступ из разных частей."

    Пример: Корзина, карта клиента, плеер.
*/

const instance = {
  name: 'singleton',
};

class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}
