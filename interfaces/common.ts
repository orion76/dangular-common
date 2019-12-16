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



export const TITLE_SERVICE = new InjectionToken<ITitleService>('TITLE_SERVICE');

export interface ITitleService {
  readonly title: string;

  setTitle(title: string);
}

