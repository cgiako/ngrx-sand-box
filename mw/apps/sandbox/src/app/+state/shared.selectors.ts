import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARED_FEATURE_KEY, State, sharedAdapter } from './shared.reducer';

// Lookup the 'Shared' feature state managed by NgRx
export const getSharedState = createFeatureSelector<State>(SHARED_FEATURE_KEY);

const { selectAll, selectEntities } = sharedAdapter.getSelectors();

export const getSharedLoaded = createSelector(
  getSharedState,
  (state: State) => state.loaded
);

export const getSharedError = createSelector(
  getSharedState,
  (state: State) => state.error
);

export const getAllShared = createSelector(getSharedState, (state: State) =>
  selectAll(state)
);

export const getSharedEntities = createSelector(
  getSharedState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSharedState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getSharedEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
