type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // like arrow function because a 'this' problem
  on = (eventName: string, callback: Callback) => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // like arrow function because a 'this' problem
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
