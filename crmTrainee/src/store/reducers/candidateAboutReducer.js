import { CHANGE_CANDIDATE_ABOUT } from '../actions/candidateAboutActions';

const INITIAL_STATE = {
  about: 'Сейчас я уделяю много времени обучению и активно изучаю JS, TS и фреймоврки. В будущем хочу реализовать опыт работы с востребованными технологиями такими как Angular, React, NODE.JS. ',
  expectations: 'От вакансии я ожидаю много новых знаний и применимость имеющегося опыта, который в дальнейшем я бы смог реализовать в вашей компании. Понимаю, что это сложная, но интересная работа, и мне известно, что компания действительно заинтересована в обучении и развитии персонала. Я буду максимально стараться стать полезной частью новой команды, чтоб внести вклад в общее дело. Поверьте в меня и я обещаю, что приложу все свои усилия, чтоб не подвести вас.',
  source: 'Портал вакансий компании',
};

const candidateAboutReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CANDIDATE_ABOUT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default candidateAboutReducer;
