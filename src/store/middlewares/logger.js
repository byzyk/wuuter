// @flow

export const logger = ({ getState, dispatch }: any) => (next: any) => (
  action: any,
) => {
  const state = getState();

  console.groupCollapsed('👻 REDUX LOGGER');
  console.log('ACTION\n', action);
  console.log('STATE\n', state);
  console.groupEnd();
  next(action);
};
