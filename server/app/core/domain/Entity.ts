
export abstract class Entity<T>{

  protected readonly _id: string
  protected  _createdAt: Date;
  protected  _updatedAt?: Date;
  protected  _prop: T;


  constructor(props: T) {
    this._prop = props
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
    return this._prop
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