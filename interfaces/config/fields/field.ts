import {IField, IFieldConfig, IFieldStateProperties} from "@libcomm/interfaces/config/fields/types";

export type tFormFieldLabelAlign = 'center' | 'right' | 'left';
export type tFormFieldLabelPlace = 'after' | 'before';


export abstract class FormField implements IField {

  public state: IFieldStateProperties;

  constructor(public config: IFieldConfig) {


    this.state = {
      required: false,
      disabled: false,
      hidden: false,
      ...config.state,
    };
  }

  get type() {
    return this.config.type;
  }

  get name() {
    return this.config.name;
  }

}



