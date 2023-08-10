// @packages
import { Action, CombinedState, combineReducers } from 'redux';

// @scripts
import authReducer from '../slices/authSlice';
import globalUiReducer from '../slices/globalUi';

const combinedReducer = combineReducers({
  authReducer,
  globalUiReducer,
});

const rootReducer = (
  state: CombinedState<{ authReducer: unknown, globalUiReducer: unknown }> | undefined,
  action: Action,
) => combinedReducer(state, action);

export default rootReducer;
