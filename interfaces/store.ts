import {EntityState} from '@ngrx/entity';

export interface IAppStateAbstract {
  [key: string]: EntityState<any> | any;
}
