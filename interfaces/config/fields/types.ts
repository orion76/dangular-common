import {IElementConfigBase} from "@libcomm/interfaces/config/form-common";
import {ISourceConfig} from "@libcomm/config/interfaces/source-config";
import {JSONAPIFilter} from "@libcomm/interfaces";
import * as Immutable from "immutable";
import {ITableConfig, ITableController} from "@libcomm/app_state/table/config";
import {TFieldScalar} from "@libcomm/interfaces/config/fields/scalar";
import {TFieldReference} from "@libcomm/interfaces/config/fields/reference";

export type TFieldKind = 'scalar' | 'reference';

export interface IFieldConfig extends IElementConfigBase {

  readonly type?: EFieldType;
  formComponent?: any;
  state?: IFieldStateProperties;
}


export interface IFieldStateProperties {
  title: string,
  description: string,
  required?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}

export interface IFieldState {
  name: string,
  type: EFieldType,
  state: IFieldStateProperties,
  config: any
}

export type TFieldStateProperties = keyof IFieldStateProperties;

export interface IField {
  readonly kind?: TFieldKind;
  name: string,
  type: EFieldType,
  config: IFieldConfig,
  state: IFieldStateProperties
}

export enum EFieldReference {
  REFERENCE = 'reference',
  ENUM = 'enum',
  LIST = 'list'
}

export interface IFormFieldEditConfig {
  config?: any;
  controller?: any;
}


export interface IFieldReferenceConfig extends IFieldConfig {
  source: ISourceConfig;
  readonly type: EFieldReference,
  edit?: IFormFieldEditConfig;
}

export interface IFieldReferenceState extends IFieldState {
  readonly kind: 'reference';
  config: IFieldReferenceConfig;
  /**
   * filters: OrderedMap<string, Set<string>>
   *
   *  Создается из JSONAPIFilter
   *
   *  ключи OrderedMap: fieldName (имя поля по которому фильтруется)
   *  значения Set: value (значения поля для фильтрации)
   *
   */

}

export interface IFieldEnumConfig extends IFieldReferenceConfig {
  readonly type: EFieldReference.ENUM,
  filters?: JSONAPIFilter[];
}

export interface IFieldEnumState extends IFieldReferenceState {
  config: IFieldEnumConfig;
  filters: Immutable.OrderedMap<string, Immutable.Set<string>>
}


export interface IFieldListConfig extends IFieldReferenceConfig {
  readonly type: EFieldReference.LIST,
  config?: ITableConfig;
  controller?: ITableController;
}

export interface IFieldListState extends IFieldReferenceState {
  config: IFieldListConfig;

}

export type TFieldReferenceConfig = IFieldReferenceConfig | IFieldEnumConfig | IFieldListConfig;
export type TFieldReferenceState = IFieldReferenceState | IFieldEnumState | IFieldListState;


export enum EFieldScalar {
  SCALAR = 'scalar',
  STRING = 'string',
  NUMBER = 'number'
}

export interface IFieldScalarConfig extends IFieldConfig {

  readonly type: EFieldScalar;
}

export interface IFieldScalarState extends IFieldState {
  readonly kind: 'scalar';
  config: IFieldScalarConfig;
}

export interface IFieldNumberConfig extends IFieldScalarConfig {
  readonly type: EFieldScalar.NUMBER,
}

export interface IFieldNumberState extends IFieldScalarState {
  config: IFieldNumberConfig;
}

export interface IFieldStringConfig extends IFieldScalarConfig {
  readonly type: EFieldScalar.STRING,
}

export interface IFieldStringState extends IFieldScalarState {
  config: IFieldStringConfig
}


export type TFieldScalarConfig = IFieldScalarConfig | IFieldNumberConfig | IFieldStringConfig;
export type TFieldScalarState = IFieldScalarState | IFieldNumberState | IFieldStringState;

export type EFieldType = EFieldScalar | EFieldReference;


export type TFieldConfig = TFieldScalarConfig | TFieldReferenceConfig;


export type TFieldState = TFieldScalarState | TFieldReferenceState


export type Fields = TFieldScalar | TFieldReference;
