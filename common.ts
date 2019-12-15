import {TFieldName} from '@dangular-forms/types/form-field.type';

export function ArrayToRecord<T extends any>(arr: T[], field: TFieldName<T>): Record<string, T> {
  return arr.reduce((acc: Record<string, T>, curr: T) => {
    const fieldValue: string = curr[field] as string;
    acc[fieldValue] = curr;
    return acc;
  }, {});
}
