export const getCurrentScreen = (navigation) => {
  const indexCurrentScreen = navigation.getState().index;
  return navigation.getState().routeNames[indexCurrentScreen];
};
