import { makePutRequest } from '../../../utils/services/profileData';
import { changeUserContacts } from '../../actions/userContactsAction';

const editContacts = (payload, id) => async (dispatch) => {
  const processedData = { ...payload, skype: payload.skype.toLowerCase() };
  makePutRequest(processedData, `/api/users/${id}/contactinfo`)
    .then(() => dispatch(changeUserContacts(processedData)))
    .catch((e) => console.log(e));
};

export default editContacts;
