import {IEntity} from '../../entity';
import {OrderedMap, Set} from 'immutable';


export interface IFormEnumState {
  formId: string;
  fieldName: string;
  source: string;
  filters: TEnumFilters;
  items: IEntity[];

}


export type TEnumFilters = OrderedMap<string, Set<string>>;



