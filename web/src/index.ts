import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Marcelo', age: 46 });

const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Pay attention here. You must select a root element!');
}
