/**
 * Created by rf1804
 *
 * @format
 */

import {combineReducers} from 'redux';

import example from './example.reducer';
import {IExample} from '../../global/types';

export interface IRootState {
  example: IExample;
}

const rootReducer = combineReducers<IRootState>({
  example: example,
});

export default rootReducer;
