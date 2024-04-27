import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from './customer-create.dto';
import { CreateCustomerUseCase } from '@customers/use-cases/create/create-customer.use-case';
import { CreateCustomerResponseDto } from './customer-create-response.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('customers')
export class CustomersCreateController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}
  @Post()
  @ApiBody({ type: CreateCustomerDto })
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerResponseDto> {
    const customer =
      await this.createCustomerUseCase.execute(createCustomerDto);
    return new CreateCustomerResponseDto(customer);
  }
}
