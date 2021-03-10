import { User } from './models/User';

const user = new User({ name: 'karim', age: 9999 });

user.on('click', () => {
  console.log('user has click');
});

user.get('name');

console.log(user);
