export interface Controller<T>{
  handle: (request: T) => Promise<any>
}