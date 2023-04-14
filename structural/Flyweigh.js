/* 
    Flyweigh - Легковес

    Хорошо работает через фабричный метод

    Используется: "Позволяет вместить больше кол-во определенных
         объектов в выделенную оперативную память. Своего рода кеширование.
         Для экономии памяти занимаемого объекта.
         Возвращает ссылку на модель."
    
    Пример: ---
*/

class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    this.models[name] = new Auto(name);
    return this.models[name];
  }
}
