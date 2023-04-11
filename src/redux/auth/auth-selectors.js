const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getUserId = (state) => state.auth.user.id;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserId,
};

export default authSelectors;
