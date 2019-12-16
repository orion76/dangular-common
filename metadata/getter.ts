
import {isNumber} from 'util';
import {TScalar} from './types';
import produce from 'immer';

const DRAFTABLE = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('immer-draftable') : '__$immer_draftable';

function isDraftable(value) {
  if (!value || typeof value !== 'object') {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }

  if (value instanceof Object) {
    return true;
  }
  return !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE];
}

export namespace GetSet {

  export function has(state: any, field: TScalar) {
    ErrorIsNotDraftable(state);
    if (Array.isArray(state)) {
      return state[field] !== undefined && state[field] !== null;
    } else {
      return state.hasOwnProperty(field);
    }
  }

  export function hasIn(state: any, path: TScalar[]) {
    let curr = state;
    const result = path.every((field: any) => {
      curr = get(curr, field);
      return Boolean(curr);
    });
    return result;
  }

  export function get(state: any, field: TScalar) {
    ErrorIsNotDraftable(state);
    return state[field];
  }

  export function getIn(state: any, path: TScalar[]) {
    let curr = state;
    const result = path.every((field: any) => {
      curr = get(curr, field);
      return Boolean(curr);
    });
    return result ? curr : null;
  }

  function ErrorIsNotDraftable(value: any) {
    if (!isDraftable(value)) {
      throw new Error(`Value is not draftable: ${value}`);
    }
  }

  export function set<T>(state: T, field: TScalar, value: any): T {
    ErrorIsNotDraftable(state);

    return produce(state, (draft: any) => {
      draft[field] = value;
    });
  }


  export function setIn(state: any, path: TScalar[], value: any) {
    if (path.length === 0) {
      return state;
    }

    if (path.length === 1) {
      return set(state, path[0], value);
    }

    const field = path[0];
    const nextPath = path.slice(1);
    let nextState;

    if (has(state, field)) {
      nextState = get(state, field);
    } else {
      nextState = isNumber(field as number) ? [] : {};
    }

    return set(state, field, setIn(nextState, nextPath, value));
  }

  function _arrayDelete(arr: any[], index: number) {
    if (typeof index === 'number') {
      return produce(arr, (draft: Array<any>) => {
        draft.splice(index, 1);
      });
    } else {
      throw new Error(`Last field should be of type "number", but he is equal ${index}`);
    }
  }

  function _objectDelete(obj: any, field: string) {
    return produce(obj, (draft: any) => {
      delete draft[field];
    });
  }


  export function remove(state: any, field: TScalar) {
    ErrorIsNotDraftable(state);
    let result: any;

    if (Array.isArray(state)) {
      result = _arrayDelete(state, field as number);
    } else {
      result = _objectDelete(state, field as string);
    }
    return result;
  }

  export function removeIn(state: any, path: TScalar[]) {
    if (path.length === 0) {
      return state;
    }

    if (path.length === 1) {
      return remove(state, path[0]);
    }

    const field = path[0];
    const nextPath = path.slice(1);
    return set(state, field, removeIn(get(state, field), nextPath));
  }
}

