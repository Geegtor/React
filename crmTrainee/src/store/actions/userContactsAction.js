export const CHANGE_USER_CONTACTS = 'CHANGE_USER_CONTACTS';

export const changeUserContacts = (details) => ({
  type: CHANGE_USER_CONTACTS,
  payload: details,
});
