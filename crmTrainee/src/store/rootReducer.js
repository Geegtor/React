import { combineReducers } from 'redux';

import profilePhotoReducer from './reducers/profilePhotoReducer';
import searchInfoReducer from './reducers/searchInfoReducer';
import userInfoReducer from './reducers/userInfoReducer';
import userContactsReducer from './reducers/userContactsReducer';
import userDataListReducer from './reducers/userDataListReducer';
import ModalReducer from './reducers/ModalReducer';

import candidateGeneralInfoReducer from './reducers/candidateGeneralInfoReducer';
import candidateContactsReducer from './reducers/candidateContactsReducer';
import candidateEducationReducer from './reducers/candidateEducationReducer';
import candidateLanguagesReducer from './reducers/candidateLanguagesReducer';
import candidateWorkExperienceReducer from './reducers/candidateWorkExperienceReducer';
import candidateAboutReducer from './reducers/candidateAboutReducer';
import candidateDirectionOfIntershipReducer from './reducers/candidateDirectionOfIntershipReducer';
import candidateAchievementReducer from './reducers/candidateAchievementReducer';
import candidateFileReducer from './reducers/candidateFileReducer';

const rootReducer = combineReducers({
  profile: combineReducers({
    profilePhoto: profilePhotoReducer,
    generalInfo: userInfoReducer,
    candidateGeneralInfo: candidateGeneralInfoReducer,
    candidateContacts: candidateContactsReducer,
    candidateEducation: candidateEducationReducer,
    candidateAchievement: candidateAchievementReducer,
    candidateLanguages: candidateLanguagesReducer,
    candidateWorkExperience: candidateWorkExperienceReducer,
    candidateAbout: candidateAboutReducer,
    candidateDirectionOfIntership: candidateDirectionOfIntershipReducer,
    candidateFile: candidateFileReducer,
    searchInfo: searchInfoReducer,
    contactsInfo: userContactsReducer,
    userDataList: userDataListReducer,
    modal: ModalReducer,
  }),
});

export default rootReducer;
