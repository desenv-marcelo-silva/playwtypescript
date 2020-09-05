class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
  console.log('desc', desc);
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (error) {
      console.log('oops, boat was sunk');
    }
  };
}

new Boat().pilot();
