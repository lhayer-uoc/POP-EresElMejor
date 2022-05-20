const dbUserToDto = (user) => {
  return {
    isLoggedIn: true,
    userData: {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      token: user.notificationToken,
    },
  };
};

export default dbUserToDto;
