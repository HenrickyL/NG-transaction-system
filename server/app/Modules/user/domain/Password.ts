import { InvalidPasswordErrorsEnum } from 'types/enums';
import bcrypt from 'bcryptjs'
import { InvalidPasswordError } from '../useCases/errors';


export class Password{
  private readonly _password: string
  private readonly _hashed?: boolean

  private constructor(password: string, hashed: boolean) {
    this._password = password
    this._hashed = hashed
  }

  static errors: InvalidPasswordErrorsEnum[] = []
  private static validate(password: string): boolean {
    Password.errors = []
    password = password.trim()
    // "8 characters",
    if(password.length < 8){
      Password.errors.push(InvalidPasswordErrorsEnum["8 characters"])
    }
    // "one number",
    if(! /[0-9]/.test(password)){
      Password.errors.push(InvalidPasswordErrorsEnum["one number"])
    }
    // "at least one capital letter"
    if(! /[A-Z]/.test(password)){
      Password.errors.push(InvalidPasswordErrorsEnum["at least one Upper letter"])
    }
    return Password.errors.length == 0
  }

  static create(password: string, hashed: boolean = false): Password {
    if (!hashed && !this.validate(password)) {
      throw new InvalidPasswordError(Password.errors);
    }
    return new Password(password, hashed)
  }


  get value():string{
    return this._password
  }
  get isHashed():boolean{
    return this._hashed
  }

  public async getHashedValue(): Promise<string> {
    if (this._hashed) {
      return this._password
    }
    return await bcrypt.hash(this._password, 10)
  }

  public async comparePassword(plainTextPassword: string): Promise<boolean> {
    return  await bcrypt.compare(plainTextPassword, this._password)
  }
}