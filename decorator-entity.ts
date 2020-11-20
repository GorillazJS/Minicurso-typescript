function appVersion(appVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = appVersion;
    };
  };
}

@appVersion('1.0.0')
class APP {}
console.log(new APP());
