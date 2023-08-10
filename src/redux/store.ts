import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

// @scripts
import rootReducer from './reducer/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
