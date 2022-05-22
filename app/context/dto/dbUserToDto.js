const dbUserToDto = (user) => {
  return {
    isLoggedIn: true,
    userData: {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
    },
  };
};

export default dbUserToDto;
