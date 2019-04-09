import {IEntity} from "../../common/entity/interfaces";
import {IEnumFlagged} from "../../enum-flagged";

import * as Immutable from 'immutable';

export enum ESelectOptionsStatus {
  ADD = 1 << 0,
  LOAD = 1 << 1,
  LOAD_SUCCESS = 1 << 2,
  LOAD_ERROR = 1 << 3,
  FILTERS_UPDATED = 1 << 4,

}


export interface IFormEnumState {
  formId: string,
  fieldName: string,
  source: string,
  filters: TEnumFilters,
  items: IEntity[],

}

export interface IFormEnumsStatus {
  formId: string,
  fieldName: string,
  status: IEnumFlagged<ESelectOptionsStatus>,

}


export type TEnumFilters = Immutable.OrderedMap<string, Immutable.Set<string>>;



