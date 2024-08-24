import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateBlockFigureDto } from './block-figure-create.dto';
import { CreateBlockFigureResponseDto } from './block-figure-response.dto';
import { CreateBlockFigureUseCase } from '@block-figure/use-cases/create/create-block-figure.use-case';

@Controller('block-figure')
@ApiTags('block-figure')
export class BlockFigureCreateController {
  constructor(
    private readonly createBlockFigureUseCase: CreateBlockFigureUseCase,
  ) {}
  @Post()
  @ApiBody({ type: CreateBlockFigureDto })
  async create(
    @Body() createBlockFigureDto: CreateBlockFigureDto,
  ): Promise<CreateBlockFigureResponseDto> {
    const blockFigure =
      await this.createBlockFigureUseCase.execute(createBlockFigureDto);
    return new CreateBlockFigureResponseDto(blockFigure);
  }
}
