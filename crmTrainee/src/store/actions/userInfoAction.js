export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';

export const changeUserInfo = (details) => ({
  type: CHANGE_USER_INFO,
  payload: details,
});
