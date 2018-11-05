import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Addresses} from '../models';
import {AddressesRepository} from '../repositories';

export class AddressesController {
  constructor(
    @repository(AddressesRepository)
    public addressesRepository : AddressesRepository,
  ) {}

  @post('/addresses', {
    responses: {
      '200': {
        description: 'Addresses model instance',
        content: {'application/json': {'x-ts-type': Addresses}},
      },
    },
  })
  async create(@requestBody() addresses: Addresses): Promise<Addresses> {
    return await this.addressesRepository.create(addresses);
  }

  @get('/addresses/count', {
    responses: {
      '200': {
        description: 'Addresses model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Addresses)) where?: Where,
  ): Promise<Count> {
    return await this.addressesRepository.count(where);
  }

  @get('/addresses', {
    responses: {
      '200': {
        description: 'Array of Addresses model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Addresses}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Addresses)) filter?: Filter,
  ): Promise<Addresses[]> {
    return await this.addressesRepository.find(filter);
  }

  @patch('/addresses', {
    responses: {
      '200': {
        description: 'Addresses PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() addresses: Addresses,
    @param.query.object('where', getWhereSchemaFor(Addresses)) where?: Where,
  ): Promise<Count> {
    return await this.addressesRepository.updateAll(addresses, where);
  }

  @get('/addresses/{id}', {
    responses: {
      '200': {
        description: 'Addresses model instance',
        content: {'application/json': {'x-ts-type': Addresses}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Addresses> {
    return await this.addressesRepository.findById(id);
  }

  @patch('/addresses/{id}', {
    responses: {
      '204': {
        description: 'Addresses PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() addresses: Addresses,
  ): Promise<void> {
    await this.addressesRepository.updateById(id, addresses);
  }

  @del('/addresses/{id}', {
    responses: {
      '204': {
        description: 'Addresses DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.addressesRepository.deleteById(id);
  }
}
