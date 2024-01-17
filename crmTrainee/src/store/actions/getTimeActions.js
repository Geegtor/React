// !!! WARNING !!!
// the code in this file was written during initial setup and shold be corrected or removed

export const SET_TIME = 'SET_TIME';

export const setTime = (data) => ({
  type: SET_TIME,
  data,
});

export const SET_PENDING_STATUS = 'SET_PENDINS_STATUS';

export const setPendingStatus = () => ({
  type: SET_PENDING_STATUS,
});
