const readGeneralInfoFormKey = (key) => {
  switch (key) {
    case 'surname':
      return 'Фамилия:';

    case 'name':
      return 'Имя:';

    case 'birthday':
      return 'Дата рождения:';

    case 'city':
      return 'Локация офиса:';

    case 'role':
      return 'Должность:';

    case 'locations':
      return 'Локация поиска:';

    case 'departments':
      return 'Направление:';

    case 'adres':
      return 'Адрес проживания:';

    case 'locationOfCity':
      return 'Локация';

    default:
      return key;
  }
};

export default readGeneralInfoFormKey;
