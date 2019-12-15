import * as Immutable from 'immutable';
import {IEntity} from '@xangular-common/entity';


export interface IFormEnumState {
  formId: string;
  fieldName: string;
  source: string;
  filters: TEnumFilters;
  items: IEntity[];

}


export type TEnumFilters = Immutable.OrderedMap<string, Immutable.Set<string>>;



