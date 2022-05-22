const dbUserToDto = (user) => {
  return {
    isLoggedIn: true,
    userData: {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      token: user.notificationToken,
    },
  };
};

export default dbUserToDto;
