import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMessageState from './../states/messages/messages.reducer'
export interface State {
  messageState: fromMessageState.MessagesState
}

export const reducers: ActionReducerMap<State, any> = {
  messageState: fromMessageState.MessageReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
