import createArrForDB from '../../../utils/createArrForDB';
import { makePutRequest } from '../../../utils/services/profileData';
import { chageSearchInfo } from '../../actions/searchInfoActions';

const editSearchInfo = (payload, id, officeLocations, departments) => async (dispatch) => {
  const { locations: locationsFormikData, departments: departmentsFormikData } = payload;
  const splitLocations = locationsFormikData.split(', ');
  const splitDepartments = departmentsFormikData.split(', ');
  const locationsArrForDB = createArrForDB(splitLocations, officeLocations, 'city');
  const departmentsArrForDB = createArrForDB(splitDepartments, departments, 'name');
  const payloadForDB = {
    searchingLocations: locationsArrForDB,
    searchingDepartments: departmentsArrForDB,
  };
  makePutRequest(payloadForDB, `/api/users/${id}/searchinfo`)
    .then(() => dispatch(chageSearchInfo(payload)))
    .catch((e) => console.log(e));
};

export default editSearchInfo;
