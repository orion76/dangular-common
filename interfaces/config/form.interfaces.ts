import {IKeyValueList} from '@libcomm/interfaces';

import * as Immutable from 'immutable';
import {IMenuItem} from "@libcomm/config/interfaces/source-config";
import {IButtons, IHTMLElementConfig} from "./html-element.interfaces";
import {IField, TFieldConfig} from "@libcomm/interfaces/config/fields/types";


export interface IConfigMultiformTab {
  label: string;
}

export interface IConfigMultiform {
  tabs: IKeyValueList<IConfigMultiformTab>,
  actions: IMenuItem[]
}


export interface IFormConfig {
  source?: string,
  actions?: IButtons,
  fields: TFieldConfig[],
  elements?: IHTMLElementConfig[],
}




export type TFormValue = IKeyValueList<any>;







