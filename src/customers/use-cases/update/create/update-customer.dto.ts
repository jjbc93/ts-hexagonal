import { CreateCustomerRequestDto } from '@customers/use-cases/create/customer-create.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCustomerRequestDto extends PartialType(
  CreateCustomerRequestDto,
) {}
