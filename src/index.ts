import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'karim', age: 9999 });

user.save();

user.events.on('change', () => {
  console.log('change');
});

user.events.trigger('change');
// const user2 = new User({ name: 'stephen', age: 9999 });

// user2.save();
