import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import {
  CustomerParamFindOneDto,
  CustomersFindOneResponseDto,
} from './customer-find-one.dto';
import { FindOneCustomerUseCase } from '@customers/use-cases/find-one/find-customers.use-case';

@Controller('customers')
@ApiTags('customers')
export class CustomersFindOneController {
  constructor(
    private readonly findOneCustomerUseCase: FindOneCustomerUseCase,
  ) {}

  @Get(':id')
  @ApiParam({ name: 'id' })
  async find(
    @Param() param: CustomerParamFindOneDto,
  ): Promise<CustomersFindOneResponseDto> {
    const customer = await this.findOneCustomerUseCase.execute(param);
    return new CustomersFindOneResponseDto(customer);
  }
}
