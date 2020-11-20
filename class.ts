class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logDetails(): void {
    console.log(`O jogador ${this.name} tem ${this.age} anos`);
  }
}

class Charinfo extends UserAccount {
  private nickname: string;
  //readonly level: number;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log('----------get----------');
    return this.level;
  }

  set setLevel(l: number) {
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
