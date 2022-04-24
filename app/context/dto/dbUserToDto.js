const dbUserToDto = (user) => {
  return {
    isLoggedIn: true,
    userData: {
      name: user.displayName,
      email: user.email,
    },
  };
};

export default dbUserToDto;
