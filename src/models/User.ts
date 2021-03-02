import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
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

  //-Events trigger :
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

  //-Fetching data from 'a' server :

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  //-Saving Data :

  save(): void {
    const id = this.get('id');

    if (id) {
      //- put request
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //-post request
      axios.post('http://localhost:3000/users/', this.data);
    }
  }
}
