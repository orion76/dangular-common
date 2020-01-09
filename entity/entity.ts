import {EEntityDeleted, IEntity} from './types';
import {IConfigModel, IResponseField} from '../../dangular_data/types';


export function EntityFactory<T extends IEntity>(entityClass: any, config: IConfigModel, ...vars: any[]): T {
  return new entityClass(config, ...vars);

}

export function objCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export abstract class Entity<S> implements IEntity {
  protected config: IConfigModel;
  protected data: any;

  constructor(config: IConfigModel, data: any) {
    this.config = objCopy(config);
    this.data = objCopy(data);
    this.init();
  }

  abstract get id(): string

  abstract get deleted(): EEntityDeleted;

  get is_new(): boolean {
    return !Boolean(this.id);
  }

  get label(): string {
    return `${this.source}:${this.type}:${this.id}`;
  }

  get source(): string {
    return this.config.source;
  }

  abstract get type(): string;

  getBundle(): string {
    return this.config.bundle;
  }

  init() {
    this.config.fields = {...this.config.fields, attributes: {}, relationships: {}};
    const {attributes, relationships} = this.config.fields;

    Object.keys(attributes).forEach((key: string) => {
      Object.defineProperty(this, key, {
        get: () => this._getAttribute(key),
        set: (value: any) => {
          if (this._getAttribute(key) !== value) {
            this.setAttribute(key, value);
          }
        },
      });
    });
    Object.keys(relationships).forEach((key: string) => {
      Object.defineProperty(this, key, {
        get: () => this._getRelationship(key),
        set: (value: any) => this.setRelationship(key, value),
      });
    });
  }

  _getAttribute(name: string): string | string[] {
    const configField = this.config.fields.attributes[name];
    const value = this.getAttribute(name);

    return this._getValue(configField, value);
  }

  _getRelationship(name: string): any | any[] {
    const configField = this.config.fields.relationships[name];
    const value = this.getRelationship(name);
    return this._getValue(configField, value);
  }

  _getValue(config: IResponseField, value: any) {
    if (Array.isArray(value)) {
      if (config.multiple) {
        return value;
      }

      if (value.length === 1) {
        return value[0];
      }

      return undefined;
    } else {
      return value;
    }

  }


  abstract getAttribute(name: string): string;

  abstract setAttribute(name: string, value: string): string;

  abstract getRelationship(name): any;

  abstract setRelationship(name: string, value: any);

  toRest() {
  }

}

