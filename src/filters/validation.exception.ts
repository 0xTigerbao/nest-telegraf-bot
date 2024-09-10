import { BadRequestException } from '@nestjs/common';
import { TransformedErrors } from './validation-exception-factory';

export class ValidationException extends BadRequestException {
  constructor(
    public validationErrors: TransformedErrors | TransformedErrors[],
  ) {
    super();
  }
}
