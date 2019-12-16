import {InjectionToken} from '@angular/core';
import {IKeyValueList} from '../common';
import {IEntity} from '../../entity';


export interface IConfigMultiformTab {
  label: string;
}
export interface MenuItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  queryParams?: {
    [k: string]: any;
  };
  items?: MenuItem[] | MenuItem[][];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  routerLinkActiveOptions?: any;
  separator?: boolean;
  badge?: string;
  badgeStyleClass?: string;
  style?: any;
  styleClass?: string;
  title?: string;
  id?: string;
  automationId?: any;
}
export type TMenuPlace = 'right' | 'middle' | 'left';
export type TUserAccessType = 'role' | 'right' ;
export type UMenuStatus = 'changed' | 'handled' | 'complete';

export interface IUserAccess {
  type: TUserAccessType;
}
export enum EUserRole {
  ANONYM = 'ANONYM',
  AUTORIZED = 'AUTORIZED',
  ADMIN = 'ADMIN'
}
export interface IUserAccessRole extends IUserAccess {
  type: 'role';
  roles: EUserRole[];
}

export interface IUserAccessRight extends IUserAccess {
  type: 'right';
  right: string[];
}

export type UUserAccess = IUserAccessRole | IUserAccessRight;
export interface IMenuItem extends MenuItem {
  items?: IMenuItem[];
  enabled?: boolean;
  access?: UUserAccess;
  status?: UMenuStatus;
}

export interface IConfigMultiform {
  tabs: IKeyValueList<IConfigMultiformTab>;
  actions: IMenuItem[];
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
export interface IFormFieldState {
  name: string;
  label: string;
  description: string;
  required?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}
export type TFieldName<E> = Extract<keyof E, string>;
export interface IFormFieldStateWithName<E> extends IFormFieldState {
  name: TFieldName<E>;
}


export interface IFormConfig<E extends IEntity> {
  source?: string;
  actions?: IButton[];
  fields: IFormFieldStateWithName<E>[];
}

export const FORM_ENTITY_CONFIG = new InjectionToken<IFormConfig<any>>('FORM_ENTITY_CONFIG');


export type TFormValue = IKeyValueList<any>;







