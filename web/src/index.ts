import { User } from './models/User';

const user = new User({ name: 'Kiara', age: 6 });

user.events.on('change', () => {
  console.log('change triggered');
});

user.events.trigger('change');
