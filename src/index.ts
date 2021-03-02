import { User } from './models/User';

const user = new User({ name: 'karim', age: 20 });

user.on('click', () => {
  console.log('Click#1 Event trigred');
});

user.on('click', () => {
  console.log('Click#2  Event trigred');
});

user.on('hover', () => {
  console.log('hover#1  Event trigred');
});

user.trigger('click');

// console.log('user.events', user.events);
