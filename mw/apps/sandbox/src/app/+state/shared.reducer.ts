import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as SharedActions from './shared.actions';
import { SharedEntity } from './shared.models';

export const SHARED_FEATURE_KEY = 'shared';

export interface State extends EntityState<SharedEntity> {
  selectedId?: string | number; // which Shared record has been selected
  loaded: boolean; // has the Shared list been loaded
  error?: string | null; // last known error (if any)
}

export interface SharedPartialState {
  readonly [SHARED_FEATURE_KEY]: State;
}

export const sharedAdapter: EntityAdapter<SharedEntity> =
  createEntityAdapter<SharedEntity>();

export const initialState: State = sharedAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const sharedReducer = createReducer(
  initialState,
  on(SharedActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(SharedActions.loadSharedSuccess, (state, { shared }) =>
    sharedAdapter.setAll(shared, { ...state, loaded: true })
  ),
  on(SharedActions.loadSharedFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return sharedReducer(state, action);
}
