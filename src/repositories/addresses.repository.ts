import { DefaultCrudRepository, juggler, BelongsToAccessor, repository } from '@loopback/repository';
import { Addresses, People } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { PeopleRepository } from './people.repository';

export class AddressesRepository extends DefaultCrudRepository<
  Addresses,
  typeof Addresses.prototype.Id
  > {
  public readonly people: BelongsToAccessor<
    People,
    typeof Addresses.prototype.Id
    >;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('PeopleRepository')
    peopleRepositoryGetter: Getter<PeopleRepository>,
  ) {
    super(Addresses, dataSource);
    this.people = this._createBelongsToAccessorFor(
      'AddressId',
      peopleRepositoryGetter,
    );
  }
}
