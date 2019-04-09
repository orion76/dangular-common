import {EventEmitter} from '@angular/core';


export interface iTableColumn {
  field: string;
  header?: string;
  styleClass?: string;
  style?: any;
  format?: any;
  hidden?: boolean;
  filter?: boolean;
}

export interface iTableEvents {
  onRowSelect: EventEmitter<any>;
  onRowClick: EventEmitter<any>;
  onRowDblclick: EventEmitter<any>;
}


