import { repository } from '@loopback/repository';
import { get, param } from '@loopback/rest';
import { AddressesRepository } from "../repositories";
import { Addresses, People } from '../models';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class AddressesControllerController {
  constructor(
    @repository(AddressesRepository) protected addressRepository: AddressesRepository,
  ) { }

  @get('/addresses/{id}/people')
  async getPerson(
    @param.path.number('id') addressId: typeof Addresses.prototype.Id,
  ): Promise<People> {
    return await this.addressRepository.people(addressId);
  }
}
