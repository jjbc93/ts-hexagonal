import { Body, Controller, Patch } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateCustomerDto } from './customer-update.dto';
import { UpdateCustomerResponseDto } from './customer-create-response.dto';
import { UpdateCustomerUseCase } from '@customers/use-cases/update/create/update-customer.use-case';

@Controller('customers')
@ApiTags('customers')
export class CustomersUpdateController {
  constructor(private readonly updateCustomerUseCase: UpdateCustomerUseCase) {}
  @Patch()
  @ApiBody({ type: UpdateCustomerDto })
  async update(
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<UpdateCustomerResponseDto> {
    const customer =
      await this.updateCustomerUseCase.execute(updateCustomerDto);
    return new UpdateCustomerResponseDto(customer);
  }
}
