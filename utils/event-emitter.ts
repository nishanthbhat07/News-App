import EventEmitter from "tiny-emitter";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const emitter = new EventEmitter();

export const eventEmit = (eventName: string, ...params: unknown[]) => {
  emitter.emit(eventName, ...params);
};

export const eventListener = (
  eventName: string,
  callback: (...args: unknown[]) => void,
) => {
  emitter.on(eventName, callback);
};

export const removeListener = (
  eventName: string,
  callback?: (...args: unknown[]) => void,
) => {
  emitter.off(eventName, callback);
};
