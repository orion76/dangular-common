export enum EEntityDeleted {
  NOT_DELETED = 0,
  DELETED_MARK = 1,
  DELETED_ALLOWED = 10,
  DELETED = 20,
}

export interface IEntity {
  id: string;
  source: string;
  title?: string;
  is_new?: boolean;
  deleted?: EEntityDeleted;
  drupal_internal__id?: string;
}
