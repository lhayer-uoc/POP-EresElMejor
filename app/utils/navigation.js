export const getCurrentScreen = (navigation) => {
  const indexCurrentScreen = navigation.getState().index;
  return navigation.getState().routeNames[indexCurrentScreen];
};

export const getCurrentScreenKey = (state) => {
  const indexCurrentScreen = state.index;
  return state.routes[indexCurrentScreen].key;
};
