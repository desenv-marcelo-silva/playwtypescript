import { User } from './models/User';

const user = new User({ name: 'Marcelo', age: 46 });

user.on('clicar', () => {});
user.on('clicar', () => {});
user.on('sair', () => {});
console.log(user);
