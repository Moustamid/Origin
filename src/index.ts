import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'karim', age: 9999 });

user.save();

const user2 = new User({ name: 'stephen', age: 9999 });

user2.save();
