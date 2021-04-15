import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DbDataSource} from '../datasources';

export interface Check {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAll(): Promise<[{}]>
}

export class CheckProvider implements Provider<Check> {
  constructor(
    // db must match the name property in the datasource json file
    @inject('datasources.db')
    protected dataSource: DbDataSource = new DbDataSource(),
  ) {}

  value(): Promise<Check> {
    return getService(this.dataSource);
  }
}
