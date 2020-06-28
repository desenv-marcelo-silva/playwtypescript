import { User } from './models/User';

const user = new User({ name: 'Marcelo', age: 46 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Marcelo Silva' });
user.set({ age: 47 });

console.log(user.get('name'));
console.log(user.get('age'));
