// @ts-ignore 'rando' is should take 'any'
import { rando } from '@nastyox/rando.js';
import { createModel } from '@rematch/core';
import { RootState } from 'store';

import type { RootModel } from './index';

export interface CounterState {
  previous: number;
  current: number;
  total: number;
}

export const initialState: CounterState = {
  previous: 0,
  current: 0,
  total: 0,
};

export const selectCounter = (state: RootState) => {
  return state.counter || initialState;
};

const counter = createModel<RootModel>()({
  state: initialState,

  reducers: {
    setCounter: ({ current, total }, nextPick: number) => {
      return {
        previous: current,
        current: nextPick,
        total: total + 1,
      };
    },

    clearCounter: () => initialState,
  },

  effects: dispatch => ({
    pickNextArtifact: (payload: null, { minMax }) => {
      const { minimum: min, maximum: max } = minMax;
      dispatch.counter.setCounter(rando(min, max));
    },

    clearPickedArtifacts: () => {
      dispatch.counter.clearCounter();
    },
  }),
});

export default counter;
