import {FormField} from "./field";

import * as Immutable from 'immutable';
import {
  EFieldReference,
  IFieldEnumConfig,
  IFieldEnumState,
  IFieldListConfig,
  IFieldListState,
  IFieldReferenceConfig,
  IFieldReferenceState
} from "@libcomm/interfaces/config/fields/types";
import {JSONAPIFilter} from "@libcomm/interfaces";


export class FieldReference extends FormField implements IFieldReferenceState {
  readonly type: EFieldReference.REFERENCE;
  config: IFieldReferenceConfig;
  readonly kind: "reference";

}

export class FieldEnum extends FormField implements IFieldEnumState {
  readonly kind: "reference";
  public config: IFieldEnumConfig;
  _filters = Immutable.OrderedMap<string, Immutable.Set<string>>().asMutable();

  get filters() {
    return this._configFilters().merge(this._filters);
  }

  private _configFilters(): Immutable.OrderedMap<string, Immutable.Set<string>> {
    const filters = Immutable.OrderedMap<string, Immutable.Set<string>>().asMutable();

    if (this.config.filters) {
      this.config.filters.forEach((filter: JSONAPIFilter) => {
        filters.set(filter.fieldName, Immutable.Set(filter.value));
      });
    }

    return filters;
  }
}

export class FieldList extends FormField implements IFieldListState {
  config: IFieldListConfig;
  readonly kind: "reference";

}

export type TFieldReference = FieldReference | FieldEnum | FieldList
