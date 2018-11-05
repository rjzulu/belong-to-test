import { Entity, model, property } from '@loopback/repository';

@model()
export class People extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  Id: number;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  constructor(data?: Partial<People>) {
    super(data);
  }
}
