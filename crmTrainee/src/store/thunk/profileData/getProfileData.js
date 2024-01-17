import { changeUserInfo } from '../../actions/userInfoAction';
import { changeUserContacts } from '../../actions/userContactsAction';
import { chageSearchInfo } from '../../actions/searchInfoActions';
import { userDataListAction } from '../../actions/userDataListAction';
import { makeGetRequest } from '../../../utils/services/profileData';
import { PROFILE_URI } from '../../../utils/constants';

const getProfileData = () => (dispatch) => {
  makeGetRequest(PROFILE_URI)
    .then(({ body: profileData }) => {
      const {
        surname, name, birthday, officeLocation, roles: role, skype, phone, email,
        searchingDepartments, searchingLocations, id,
      } = profileData.user;
      const { roles, officeLocations, departments } = profileData;
      dispatch(changeUserInfo(
        {
          surname,
          name,
          officeLocation,
          roles: role,
          birthday: new Date(birthday),
          id,
        },
      ));
      dispatch(changeUserContacts({ email, skype, phone }));
      dispatch(chageSearchInfo(
        {
          locations: searchingLocations.map((location) => location.city).join(', '),
          departments: searchingDepartments.map((department) => department.name).join(', '),
        },
      ));
      dispatch(userDataListAction({ roles, officeLocations, departments }));
    })
    .catch((e) => console.log(e));
};

export default getProfileData;
