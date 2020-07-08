import { User } from './models/User';

const user = new User({ id: 1, name: 'Aline Gabriela', age: 34 });

user.on('save', () => {
  console.log('Salvou', user);
});

user.save();
