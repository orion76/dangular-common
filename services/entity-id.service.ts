import {Inject, Injectable, InjectionToken} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


export const ENTITY_ID = new InjectionToken<string>('entity_id');
export const ENTITY_ID_PROVIDER = new InjectionToken<IEntityIdService>('entity_id.provider');

export interface IEntityIdService {
  getId(component: any): string;
}

