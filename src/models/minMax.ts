import { createModel } from '@rematch/core';
import { RootState } from 'store';

import type { RootModel } from './index';

export interface MinMaxState {
  maximum: number;
  minimum: number;
}

export const initialState: MinMaxState = {
  maximum: 5000,
  minimum: 1,
};

export const selectMinMax = (state: RootState) => {
  return state.minMax;
};

export const isMinMaxValueValid = (value: number) => {
  return (
    !isNaN(value) &&
    value >= initialState.minimum &&
    value <= initialState.maximum
  );
};

const minMax = createModel<RootModel>()({
  state: initialState,

  reducers: {
    setMaximum: ({ minimum }, maximum: number) => {
      return { maximum, minimum };
    },

    setMinimum: ({ maximum }, minimum: number) => {
      return { maximum, minimum };
    },

    clearMinMax: () => initialState,
  },

  effects: dispatch => ({
    setMaxInputValue: (value: number | string) => {
      const newMaximum = parseInt(`${value}`);
      const { maximum: oldMaximum } = initialState;

      dispatch.minMax.setMaximum(
        isMinMaxValueValid(newMaximum) ? newMaximum : oldMaximum,
      );
    },

    setMinInputValue: (value: number | string) => {
      const newMinimum = parseInt(`${value}`);
      const { minimum: oldMinimum } = initialState;

      dispatch.minMax.setMinimum(
        isMinMaxValueValid(newMinimum) ? newMinimum : oldMinimum,
      );
    },

    clearInputValues: () => {
      dispatch.clearMinMax();
    },
  }),
});

export default minMax;
