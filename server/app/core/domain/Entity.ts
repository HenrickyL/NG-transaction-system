import { IEntity } from "./IEntity";

export abstract class Entity<T> implements IEntity<T>{

  protected readonly _id: string
  protected readonly _createdAt: Date;
  protected readonly _updatedAt?: Date;
  public readonly _props: T

  constructor(props: T) {
    this._props = props
  }

  get id():string {
    return this._id
  }
  get createdAt():Date {
    return this._createdAt
  }
  get updatedAt(): Date {
    return this._updatedAt
  }
  get props():T {
    return this._props
  }

  public equals(object: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!(object instanceof Entity)) {
      return false
    }

    return this._id === object._id
  }


}