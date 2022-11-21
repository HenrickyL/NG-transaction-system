import { InvalidUsernameLengthError } from '../useCases/RegisterUser/errors';

export abstract class Username{
  private static validate(name: string): boolean {
    return !name || name.trim().length > 2
  }
  static create(name: string): string {
    if (!this.validate(name)) {
      throw new InvalidUsernameLengthError(name);
    }
    return name;
  }
}