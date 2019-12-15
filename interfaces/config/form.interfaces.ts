import {InjectionToken} from '@angular/core';
import { IKeyValueList} from '@dangular-common/interfaces';
import {IMenuItem} from '@app-library/menu/types/types';
import {IFormConfig} from '@dangular-forms/types/form.type';


export interface IConfigMultiformTab {
  label: string;
}

export interface IConfigMultiform {
  tabs: IKeyValueList<IConfigMultiformTab>;
  actions: IMenuItem[];
}


export const FORM_ENTITY_CONFIG = new InjectionToken<IFormConfig<any>>('FORM_ENTITY_CONFIG');


export type TFormValue = IKeyValueList<any>;







