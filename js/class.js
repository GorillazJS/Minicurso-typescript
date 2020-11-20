"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`O jogador ${this.name} tem ${this.age} anos`);
    }
}
class Charinfo extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log('----------get----------');
        return this.level;
    }
    set setLevel(l) {
        this.level = l;
    }
}
const user = new UserAccount('Ygor', 30);
console.log(user);
user.logDetails();
const jhon = new Charinfo('jhon', 45, 'jhonGamer', 80);
jhon.logDetails();
jhon.setLevel = 499;
console.log(jhon.getLevel);
