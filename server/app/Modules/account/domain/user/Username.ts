import { InvalidUsernameError } from './../useCases/errors/index';

export abstract class Username{
  private static validate(name: string): boolean {
    return !name || name.trim().length > 2
  }
  static create(name: string): string {
    if (!this.validate(name)) {
      throw new InvalidUsernameError(name);
    }
    return name;
  }
}