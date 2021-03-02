interface UserProps {
  name?: string;
  age?: number;
}
//-type alias :
type Callback = () => void;

export class User {
  //-properties :
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  //-Methods :

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  //-Events :
  //! we want to store a collection of events with there respectice callback array :

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  //! trigger every callback fct of the specified event prop :

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      console.log(callback);
    });
  }
}
