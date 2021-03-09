//-type alias :
type Callback = () => void;

export class Eventing {
  // SECTION: properties :
  //! events is an object of key : [callbacks ...] pairs , evry event 'key' has a collection '[]' of callbacks
  events: { [key: string]: Callback[] } = {};

  // SECTION: Methods :

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
}
