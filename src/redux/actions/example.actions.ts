/**
 * Created by rf1804
 *
 * @format
 */

import * as type from '../constants/ActionTypes.ts';

export const exampleAction = value => {
  return {
    type: type.EXAMPLE,
    payload: value,
  };
};
