// @flow

export const logger = ({ getState }: any) => (next: any) => (action: any) => {
  const state = getState();

  console.groupCollapsed(`👻 REDUX LOGGER @ ${action.type}`);
  console.log('ACTION\n', action);
  console.log('STATE\n', state);
  console.groupEnd();
  next(action);
};
