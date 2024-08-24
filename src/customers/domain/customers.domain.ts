import { BlockFigure } from '@block-figure/domain/block-figure.domain';
import { Logger } from '@nestjs/common';

export type blockFigureArray = BlockFigure & {
  purchaseDate: Date;
  purchasePrice: number;
};

interface CustomerParams {
  id?: number;
  uuid: string;
  name: string;
  email: string;
  lastName: string;
  blockFigures: blockFigureArray[];
}

export class Customer {
  id?: number;
  uuid: string;
  name: string;
  email: string;
  lastName: string;
  fullName: string;
  blockFigures: blockFigureArray[];

  private constructor(params: CustomerParams) {
    this.id = params.id;
    this.uuid = params.uuid;
    this.name = params.name;
    this.email = params.email;
    this.lastName = params.lastName;
    this.fullName = `${params.name} ${params.lastName}`;
    this.blockFigures = params.blockFigures ?? [];
  }

  static create(params: CustomerParams): Customer {
    Logger.debug('Apply validation', 'Customer');
    return new Customer(params);
  }

  static fromValues(params: CustomerParams): Customer {
    Logger.debug('Skip validation', 'Customer');
    return new Customer(params);
  }

  update(name: string, lastName: string): void {
    this.name = name;
    this.lastName = lastName;
    Logger.debug('Apply validation', 'Customer');
  }

  /* public assignBlockFigure(blockFigure: BlockFigure): void {
    this.blockFigures.push(blockFigure);
  } */
}
