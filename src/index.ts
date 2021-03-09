import { User } from './models/User';

const user = new User({ name: 'karim', age: 9999 });

user.attributes.get('id');
user.attributes.get('name');
user.attributes.get('age');
// user.sync.save();  FIXME: better refactering solution ...
