import {FormField} from "./field";
import {
  EFieldScalar,
  IFieldNumberConfig,
  IFieldNumberState,
  IFieldScalarConfig,
  IFieldScalarState
} from "@libcomm/interfaces/config/fields/types";


export class FieldScalar extends FormField implements IFieldScalarState {
  config: IFieldScalarConfig;
  readonly kind: "scalar";


}


export class FieldNumber extends FormField implements IFieldNumberState {
  config: IFieldNumberConfig;
  readonly kind: "scalar";


}

export class FieldString extends FormField implements IFieldNumberState {
  config: IFieldNumberConfig;
  readonly kind: "scalar";

}


export type TFieldScalar = FieldScalar | FieldNumber | FieldString;
