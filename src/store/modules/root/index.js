import { combineReducers } from 'redux';
import nav from '@modules/nav';
import user from '@modules/user';

export const rootReducer = combineReducers({ nav, user });
