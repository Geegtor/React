import rangeDate from './rangeDate';

export const setTimeStatus = {
  pending: 'SET_TIME_PENDING',
  resolved: 'SET_TIME_RESOLVED',
};

export const OFFICES = [
  'Казань',
  'Киев',
  'Краков',
  'Минск',
  'Одесса',
  'Пенза',
  'Санкт-Петербург',
  'Харьков',
];

export const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const LANGUAGES = [
  'A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'C2',
  'не владею',
];

export const DIRECTION = [
  'Project Manager',
  'Business Analyst',
  'UI/UX Designer',
  'DevOps',
  'SysAdmin',
  'QA',
  'Dev',
];

export const SPECIALIZATON_DEV = [
  'Java',
  'JavaScript',
  'PHP',
  '.NET',
  'Data Science (ML, DE)',
  'Python',
  'Android',
  'Ruby',
  'Golang',
  'IOS',
  'Scala',
  'PostgreSQL',
];

export const SPECIALIZATON_QA = [
  'Manual Quality Assurance',
  'Quality Assurance Automation',
];

export const YEARS = rangeDate();
export const API_BASE_URL = 'http://10.10.15.202:8080';
export const PROFILE_URI = '/api/users/current';
