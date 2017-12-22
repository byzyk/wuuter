// @flow

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import nav from '@modules/nav';
import user from '@modules/user';
import { signInEpic } from '@modules/user/epics';

export const rootReducer = combineReducers({ nav, user });

export const rootEpic = combineEpics(signInEpic);
