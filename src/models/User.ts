interface UserProps {
  name?: string;
  age?: number;
}

type callback = () => void;

export class User {
  //-propertise :
  events: { [key: string]: callback[] } = {};
  //-constructor :
  constructor(private data: UserProps) {}

  //-Methods :

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  //-Stores the events for the Class User :
  on(eventName: string, callback: callback): void {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
