const dbUserToDto = (user) => {
  return {
    isLoggedIn: true,
    userData: {
      name: user.displayName,
      email: user.email,
      token: user.notificationToken,
    },
  };
};

export default dbUserToDto;
