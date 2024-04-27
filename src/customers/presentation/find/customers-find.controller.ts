import { Controller, Get } from '@nestjs/common';
import { FindCustomerUseCase } from '../../use-cases/find/find-customers.use-case';
import { CustomersFindResponseDto } from './customer-find.dto';
import { CustomerDto } from '../customer.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('customers')
export class CustomersFindController {
  constructor(private readonly findCustomerUseCase: FindCustomerUseCase) {}
  @Get()
  async find(): Promise<CustomersFindResponseDto> {
    const customers = await this.findCustomerUseCase.execute();
    return new CustomersFindResponseDto(
      customers.map((customer) => new CustomerDto(customer)),
    );
  }
}
