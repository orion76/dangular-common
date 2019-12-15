import {IEntityFieldConfig, UFieldDataType} from '@xangular-common/entity/entity-field.type';


export interface IFormFieldType {
  // type: UFieldTypes;
  name: UFieldDataType;
  empty: any;
  value?: string[];
  view?: string[];
  fields?: TFormFields;
}

export interface TFormFields {
  [key: string]: UFieldDataType;
}

export type TEntityFields<T> = { [key in keyof T]?: IEntityFieldConfig };
