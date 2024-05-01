import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { adminApiMiddlewares, adminApiReducers } from './admin/admin.api';
import { adminSlices } from './admin/admin.slice';
import { internApiMiddlewares, internApiReducers } from './intern/intern.api';
import { internSlices } from './intern/intern.slice';
import { managerApiMiddlewares, managerApiReducers } from './manager/manager.api';
import { managerSlices } from './manager/manager.slice';
import { supervisorApiMiddlewares, supervisorApiReducers } from './supervisor/supervisor.api';
import { supervisorSlices } from './supervisor/supervisor.slice';

const rootReducer = combineReducers({
  ...adminApiReducers,
  ...adminSlices,
  ...internApiReducers,
  ...internSlices,
  ...managerApiReducers,
  ...managerSlices,
  ...supervisorApiReducers,
  ...supervisorSlices
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        ...adminApiMiddlewares,
        ...internApiMiddlewares,
        ...managerApiMiddlewares,
        ...supervisorApiMiddlewares
      );
    }
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
