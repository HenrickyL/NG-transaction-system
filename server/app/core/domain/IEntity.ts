export interface IEntity<T>{
  id:           string
  createdAt:    Date
  updatedAt?:   Date
  props:        T
}