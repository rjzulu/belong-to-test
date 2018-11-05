import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { People } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class PeopleRepository extends DefaultCrudRepository<
  People,
  typeof People.prototype.Id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(People, dataSource);
  }
}
