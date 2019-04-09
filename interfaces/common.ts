import {MenuItem} from 'primeng/primeng';


export interface IKeyValueList<T> {
  [key: string]: T;
}

export interface JSONAPIFilter {
  fieldName: string,
  value: string[]
}

export interface IRequestParams {
  id: string,
}

export type tButtonLabelMode = 'label' | 'icon' | 'label_icon';

export interface IButton extends MenuItem {
  name: string;
  mode?: tButtonLabelMode;
  color?: string;
  data?: any;
  klass?: string[];
  weight?: number;
}



