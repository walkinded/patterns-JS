/* 
    Proxy - Заместитель

    Используется: "Своего рода прослойка, которая помогает произвести дополнительные манипуляции
        до того как отдать дальшейший контроль."
    
    Пример: ---

    Существуют: Виртуальный (ленивая зарузка), Логирующий, Защищающий, Кеширующий.
*/

class CarAccess {
  open() {
    console.log('Opening car door');
  }

  close() {
    console.log('Closing the car door');
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close();
  }
}

const door = new SecuritySystem(new CarAccess());

door.open('Roman'); // access denite
door.open('Ilon'); // opened

door.close();
