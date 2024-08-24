import { Customer } from '@customers/domain/customers.domain';
import { Logger } from '@nestjs/common';

interface BlockFigureParams {
  id?: number;
  uuid: string;
  name: string;
  brand: string;
  pieces: number;
  customer?: Customer;
  customerId?: string;
}

export class BlockFigure {
  id?: number;
  uuid: string;
  name: string;
  brand: string;
  pieces: number;
  customer?: Customer;
  customerId?: string;

  private constructor(params: BlockFigureParams) {
    (this.id = params.id),
      (this.uuid = params.uuid),
      (this.name = params.name),
      (this.brand = params.brand),
      (this.pieces = params.pieces);
    this.customerId = params.customerId;
  }

  static fromValues(params: BlockFigureParams): BlockFigure {
    Logger.debug('Skip validation', 'BlockFigure');
    return new BlockFigure(params);
  }

  static create(params: BlockFigureParams): BlockFigure {
    Logger.debug('Apply validation', 'BlockFigure');
    return new BlockFigure(params);
  }
}
