class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}

/*
 *
 * Como o TS traduz isso para JS - Decorator puro, fica da forma abaixo
 *
 */
// var __decorate = function (decorators, target, key, desc) {
//   var desc = Object.getOwnPropertyDescriptor(target, key);

//   for (var decorator of decorators) {
//     decorator(target, key, desc);
//   }
// };
