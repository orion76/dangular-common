import {Injectable, InjectionToken} from '@angular/core';


export const UNIQUE_ID_SERVICE = new InjectionToken<IUniqueIdService>('UNIQUE_ID_SERVICE');

export interface IUniqueIdService {
  getId(): string;

  getEntityId(): string;
}

@Injectable()
export class UniqueIdService implements IUniqueIdService{

  private lastId = 0;

  private lastEntityId = 0;

  constructor() {

  }

  getId(): string {
    this.lastId++;

    return this.lastId.toString();
  }

  getEntityId(): string {
    this.lastEntityId--;

    return this.lastEntityId.toString();
  }
}


