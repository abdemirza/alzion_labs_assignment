/**
 * Created by rf1804
 *
 * @format
 */

import {IExample} from '../../global/types.js';
import * as type from '../constants/ActionTypes.ts';

const initialState: IExample = {
  example: 'example',
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case type.EXAMPLE:
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
};

export default example;
