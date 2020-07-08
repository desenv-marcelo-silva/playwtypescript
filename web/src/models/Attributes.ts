export class Attributes<T> {
  constructor(private data: T) {}

  // like arrow function because a 'this' problem
  // this.data[key] it's about attributes
  // without arrow function, this it's about caller
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
