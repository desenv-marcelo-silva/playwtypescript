import { User } from './models/User';

const user = new User({ name: 'Marcelo', age: 46 });

user.on('clicar', () => {
  console.log('clicar#1');
});
user.on('clicar', () => {
  console.log('clicar#2');
});
user.on('sair', () => {
  console.log('Sair');
});

user.trigger('clicar');
user.trigger('sair');
console.log(user);
