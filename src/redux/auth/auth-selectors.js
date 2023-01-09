const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getUserId = (state) => state.auth.user.id;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserId,
};

export default authSelectors;
