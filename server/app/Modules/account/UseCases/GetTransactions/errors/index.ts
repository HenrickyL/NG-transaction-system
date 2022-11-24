import { ErrorException } from "types/errors"

export class GetTranslationsError extends ErrorException {
  constructor(data: any) {
    super(`Internal Error in 'GetTranslations' useCase.`,data)
    this.name = 'GetTranslationsError'
  }
}