import { Models } from '@rematch/core';

import counter from './counter';
import minMax from './minMax';

export interface RootModel extends Models<RootModel> {
  minMax: typeof minMax;
  counter: typeof counter;
}

const models: RootModel = { minMax, counter };
export default models;
