import { Entity, model, property, belongsTo } from '@loopback/repository';
import { People } from './people.model';

@model()
export class Addresses extends Entity {
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
  Address: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;


  // @property({
  //   type: 'number',
  //   required: true,
  // })
  // PersonId: string;
  @belongsTo(() => People)
  PersonId: number;

  constructor(data?: Partial<Addresses>) {
    super(data);
  }
}
