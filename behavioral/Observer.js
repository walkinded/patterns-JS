/* 
    Observer - Наблюдатель

    Используется: "Создает механизм подписки, позволяющий одним объектам
        следить за изменениями других объектов."
    
    Пример: ---
*/

class AutoNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach((subs) => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter((el) => !(el instanceof observer));
  }
}

class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}

class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
}

const autoNews = new AutoNews();

autoNews.register(new Jack());
autoNews.register(new Max());
autoNews.setNews('New Tesla price is 40 000');
