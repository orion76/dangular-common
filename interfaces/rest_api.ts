import {tJSONAPIFilterConjunctions, tJSONAPIFilterOperators} from '../types';
import {IKeyValueList} from './common';


export interface iJSONAPI_Response_Relationship {
  data: iJSONAPI_Entity | iJSONAPI_Entity[],
}

export interface iJSONAPI_Entity {
  id: string,
  type: string,
  attributes?: IKeyValueList<string>,
  relationships?: IKeyValueList<iJSONAPI_Response_Relationship>
}

export interface iJSONAPI_Response {
  data: iJSONAPI_Entity | iJSONAPI_Entity[] ,
  included?: iJSONAPI_Entity[],
}

export interface iJSONAPI_Filter {
  field: string[],
  value: string[],
  operator: tJSONAPIFilterOperators,
  conjunction?: tJSONAPIFilterConjunctions,
}









