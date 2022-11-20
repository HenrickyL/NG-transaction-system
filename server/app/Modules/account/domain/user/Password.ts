import { InvalidPasswordError } from "../useCases/errors";
import { InvalidPasswordErrorsEnum } from 'types/enums';

export abstract class Password{
  static errors: InvalidPasswordErrorsEnum[] = []
  private static validate(name: string): boolean {
    Password.errors = []
    name = name.trim()
    // "8 characters",
    if(name.length < 8){
      Password.errors.push(InvalidPasswordErrorsEnum["8 characters"])
    }
    // "one number",
    if(! /[0-9]/.test(name)){
      Password.errors.push(InvalidPasswordErrorsEnum["one number"])
    }
    // "at least one capital letter"
    if(! /[A-Z]/.test(name)){
      Password.errors.push(InvalidPasswordErrorsEnum["at least one Upper letter"])
    }
    return Password.errors.length == 0
  }
  static create(name: string): string {
    if (!this.validate(name)) {
      throw new InvalidPasswordError(Password.errors);
    }
    return name;
  }
}