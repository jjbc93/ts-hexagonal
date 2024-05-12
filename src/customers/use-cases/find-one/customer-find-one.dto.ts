import { IsString, IsUUID } from 'class-validator';

export class CustomerFindOneRequestDto {
  @IsUUID()
  id: string;
}
