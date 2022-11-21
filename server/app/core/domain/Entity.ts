
// import {v4 as uuid} from 'uuid'
import { IEntity } from "types/entities";


export abstract class Entity<T>{

  protected readonly _id?: string
  protected  _createdAt?: Date;
  protected  _updatedAt?: Date;


  constructor(props: IEntity) {
    this._id = props.id
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
  }

  get id():string | undefined {
    return this._id
  }
  get createdAt():Date | undefined {
    return this._createdAt
  }
  get updatedAt(): Date | undefined {
    return this._updatedAt
  }

  public equals(object: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!(object instanceof Entity<T>)) {
      return false
    }

    return this._id === object._id
  }

}

