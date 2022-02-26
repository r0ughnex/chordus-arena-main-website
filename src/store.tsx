import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';

import packageJSON from '../package.json';
import models, { RootModel } from './models';

export type RootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
export type Store = typeof store;

export const appVersion = packageJSON.version;
export const keyVersion = parseInt(appVersion);

export const persistConfig = {
  key: 'chordus-arena-main-website',
  whitelist: ['counter'],
  version: keyVersion,
  storage,
};

const store = init<RootModel>({
  plugins: [persistPlugin(persistConfig)],
  models,
});

export default store;
