import { CHANGE_CANDIDATE_DIRECTION_OF_INTERSHIP, ADD_CANDIDATE_DIRECTION_OF_INTERSHIP, RESET_CANDIDATE_DIRECTION_OF_INTERSHIP } from '../actions/candidateDirectionOfIntershipActions';

const INITIAL_STATE = [
  {
    direction: 'Dev',
    specialization: 'React',
    additionalEducation: 'Курсы(JavaScript(6 мес стажировки),EPAM),, Stack overflow,quizfull,Oracl documentation и многое другое)  ',
    technicalSkills: 'Development of movies portal with database of movies-Architecting of web application-Development of DB structure, sql-requests, performance optimization-Front-end and back-end development -Code review-Refactoring-Technologies/Tools/OS : Java, JSP, JSTL, SPRING, IoC, MVC, MySQL, Hibernate, HTML,CSS, XML, Maven, Tomcat ',
    githubLink: 'https://github.com/Geegtor',
    id: Math.random(),
  },
];

const candidateDirectionOfIntershipReducer = (state = INITIAL_STATE, { type, payload }) => {
  let newArr;
  switch (type) {
    case ADD_CANDIDATE_DIRECTION_OF_INTERSHIP:
      return [...state, payload];
    case CHANGE_CANDIDATE_DIRECTION_OF_INTERSHIP:
      return [
        ...state.map((i) => (i.id === payload.id ? payload : i)),
      ];
    case RESET_CANDIDATE_DIRECTION_OF_INTERSHIP:
      newArr = state.filter((n) => n.direction !== '');
      return [...newArr];
    default:
      return state;
  }
};

export default candidateDirectionOfIntershipReducer;
