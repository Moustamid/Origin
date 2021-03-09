import { UserProps } from './User';

export class Attributes<T> {
  //- constructor :
  constructor(private data: T) {}

  //-Methods :
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const att = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'kim',
});

const name = att.get('name');
