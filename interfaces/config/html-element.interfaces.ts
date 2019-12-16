import {IElementConfigBase, TElementType} from './form-common';
import {IButton, tButtonLabelMode} from './form.interfaces';

export interface IHTMLElementConfig extends IElementConfigBase {
  type: TElementType;
  name: string;

}

export interface IButtons {
  items: IButton[];
  mode: tButtonLabelMode;
}
