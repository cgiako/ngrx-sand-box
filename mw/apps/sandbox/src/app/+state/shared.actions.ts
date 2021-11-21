import { createAction, props } from '@ngrx/store';
import { SharedEntity } from './shared.models';

export const init = createAction('[Shared Page] Init');

export const loadSharedSuccess = createAction(
  '[Shared/API] Load Shared Success',
  props<{ shared: SharedEntity[] }>()
);

export const loadSharedFailure = createAction(
  '[Shared/API] Load Shared Failure',
  props<{ error: any }>()
);
