import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

// SECTION: User Class :

export class User {
  //- Properties :
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attributes: UserProps) {
    this.attributes = new Attributes<UserProps>(attributes);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }
}
