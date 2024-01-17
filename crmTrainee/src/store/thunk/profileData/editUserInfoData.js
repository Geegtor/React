import { makePutRequest } from '../../../utils/services/profileData';
import { changeUserInfo } from '../../actions/userInfoAction';

const editUserInfoData = (payload, id) => async (dispatch) => {
  const { officeLocation, roles } = payload;
  const storeDbData = {
    ...payload,
    officeLocation: typeof officeLocation === 'string' ? JSON.parse(officeLocation) : officeLocation,
    roles: typeof roles === 'string' ? [JSON.parse(roles)] : roles,
  };
  makePutRequest(storeDbData, `/api/users/${id}/baseinfo`)
    .then(() => dispatch(changeUserInfo(storeDbData)))
    .catch((e) => console.log(e));
};

export default editUserInfoData;
