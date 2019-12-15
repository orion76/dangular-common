import * as Immutable from 'immutable';
import {IEntity} from './types';
import {TEntityFields} from '@xangular-common/form';


export function createEntity<T extends IEntity>(
  source: string,
  id: string,
  config: TEntityFields<T>,
  values?: Partial<T>
): T {

  if (!values) {
    values = {};
  }

  const entity: any = {id, source, ...values};

  Object.keys(config)
    .filter((field: string) => !values[field])
    .forEach((field: string) => entity[field] = config[field].empty);


  return entity;
}

export class Entity<T extends IEntity> extends Immutable.Record({id: null, source: null, label: null}) {

  constructor(fields?: Partial<T>) {
    fields ? super(fields) : super();
  }

  with(values: Partial<T>) {
    return this.merge(values) as this;
  }
}
