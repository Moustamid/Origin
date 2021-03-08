import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// SECTION: User Class :

export class User {
  //- Properties :
  public events: Eventing = new Eventing();
  //- constructor :
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}

const user = new User({});
