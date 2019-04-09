import {EFieldReference, EFieldScalar, Fields, IFieldConfig} from "@libcomm/interfaces/config/fields/types";
import {FieldNumber, FieldScalar, FieldString} from "@libcomm/interfaces/config/fields/scalar";
import {FieldEnum, FieldList, FieldReference} from "@libcomm/interfaces/config/fields/reference";

export function fieldFactory(config: IFieldConfig): Fields {

  let field: Fields;

  switch (config.type) {
    case EFieldScalar.SCALAR:
      field = new FieldScalar(config);
      break;
    case EFieldScalar.NUMBER:
      field = new FieldNumber(config);
      break;
    case EFieldScalar.STRING:
      field = new FieldString(config);
      break;
    case EFieldReference.REFERENCE:
      field = new FieldReference(config);
      break;
    case EFieldReference.ENUM:
      field = new FieldEnum(config);
      break;
    case EFieldReference.LIST:
      field = new FieldList(config);
      break;
  }

  return field;
}
