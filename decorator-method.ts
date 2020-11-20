// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms}`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;
  constructor(g: string) {
    this.greeting = g;
  }

  //esperar um tempo e ae vai rodar o metodo (ms)
  @delay(2000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const pessoinha = new Greeter('Pessoinha');
pessoinha.greet();
