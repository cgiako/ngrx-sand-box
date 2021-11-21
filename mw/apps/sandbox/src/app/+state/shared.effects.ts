import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as SharedActions from './shared.actions';
import * as SharedFeature from './shared.reducer';

@Injectable()
export class SharedEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SharedActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return SharedActions.loadSharedSuccess({ shared: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return SharedActions.loadSharedFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
