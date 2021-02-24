import { User } from './models/User';

const user = new User({ name: 'karim', age: 26 });

user.on('click', () => {
  console.log('click');
});
user.on('change', () => {
  console.log('change1');
});
user.on('change', () => {
  console.log('change2');
});
// user.on('scroll', () => {});

console.log('user', user.events);

user.trigger('change');
user.trigger('click');
user.trigger('call');
