function logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} | ${target}`);
  };
}

@logger('log ->> Decorator')
class Foo {}
