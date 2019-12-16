import {TScalar} from '../metadata/types';
import {IEntity} from './types';


export type UFieldDataType = 'relationship' | 'text' | 'datetime' | 'integer' | 'link' ;

export interface IFieldData {
  value?: TScalar | { [key: string]: IEntityFieldConfig };
}

export interface IDataString extends IFieldData {
  value: string;
}

export interface IDataInteger extends IFieldData {
  value: number;
}

export interface IDataDatatime extends IFieldData {
  value: string;
}

export interface IDataLink extends IFieldData {
  children: {
    uri: IEntityFieldConfig,
    title: IEntityFieldConfig
  };
}

export interface IDataRelationship {
  value: IEntity;
}

export type TFieldData = IDataRelationship
  | IDataString
  | IDataInteger
  | IDataDatatime
  | IDataLink;


export interface IEntityFieldConfig {
  type: UFieldDataType;
  name: string;
  label: string;
  description: string;
  required?: boolean;
  multiple?: boolean;
  defaultValue: any;
}

export interface IEntityFieldRelationship extends IEntityFieldConfig {
  type: 'relationship';
  defaultValue: IEntity;
}

export interface IEntityFieldText extends IEntityFieldConfig {
  type: 'text';
  defaultValue: string;
}

export interface IEntityFieldDateInteger extends IEntityFieldConfig {
  type: 'integer';
  defaultValue: number;
}

export interface IEntityFieldDateTime extends IEntityFieldConfig {
  type: 'datetime';
  defaultValue: string;
}

export interface ILink {
  title: string;
  uri: string;
}

export interface IEntityFieldDateLink extends IEntityFieldConfig {
  type: 'link';
  defaultValue: ILink;
}

// export const createFormFieldsConfig = (name: string, type: UFieldDataType, config?: Partial<IEntityField>): IEntityField => {
//
// }

export const createFieldConfig = (name: string, type: UFieldDataType, config?: Partial<IEntityFieldConfig>): IEntityFieldConfig => {

  return {
    type,
    name,
    label: null,
    description: null,
    defaultValue: null,
    ...config || {}
  };

};


export class EntityFieldType implements IEntityFieldConfig {
  constructor(private _field: IEntityFieldConfig) {

  }

  // get data(): TFieldData {
  //   return this._field.data;
  // }

  get multiple(): boolean {
    return this._field.multiple;
  }

  get description(): string {
    return this._field.description;
  }

  get label(): string {
    return this._field.label;
  }

  get type(): UFieldDataType {
    return this._field.type;
  }

  get defaultValue() {
    return null;
  }

  get view() {
    let view: any;
    switch (this.type) {
      case 'relationship':
        view = this.defaultValue.title;
        break;
      default:
        view = this.defaultValue;
    }

    return view;
  }

  get name(): string {
    return this._field.name;
  }

  set(property: string, value: any) {
    return this.clone({[property]: value});
  }

  get(property: string) {
    if ((this as object).hasOwnProperty(property)) {
      return this[property];
    }
    if ((this.defaultValue as object).hasOwnProperty(property)) {
      return this.defaultValue[property];
    }
  }

  clone(field: Partial<IEntityFieldConfig>) {
    const newField = {...this._field, ...field};
    return new EntityFieldType(newField);
  }
}
