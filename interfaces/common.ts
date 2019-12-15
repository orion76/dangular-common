import {MenuItem} from 'primeng/primeng';
import {IMenuItem} from '@app-library/menu/types/types';
import {InjectionToken} from '@angular/core';

export function ExtractFields<T>(o: T, names: (keyof T)[]): T {


  return names.reduce((acc: T, n: keyof T) => {
    acc[n] = o[n];
    return acc;
  }, {} as T);
}

export interface IKeyValueList<T> {
  [key: string]: T;
}


export type tButtonLabelMode = 'label' | 'icon' | 'label_icon';
export type TButtonColor =  'secondary' | 'success' | 'info' | 'warning' | 'danger';

export interface IButton extends MenuItem {
  name: string;
  type?: tButtonLabelMode;
  color?: TButtonColor;
  data?: any;
  class?: string[];
  weight?: number;
}

export const SECTION_CONFIG = new InjectionToken<ISectionConfig>('section.types.ts');

export interface ISectionConfig {
  source: string;
  menu?: IMenuItem[];
}




export const TITLE_SERVICE = new InjectionToken<ITitleService>('TITLE_SERVICE');

export interface ITitleService {
  readonly title: string;

  setTitle(title: string);
}

