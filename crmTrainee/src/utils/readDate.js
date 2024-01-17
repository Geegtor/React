const readDate = (obj) => {
  if (obj.toLocaleDateString()) {
    const dayMonthSplittedDate = obj.toLocaleDateString().split('.');
    if (dayMonthSplittedDate.length === 3) {
      return `${dayMonthSplittedDate[0]}.${dayMonthSplittedDate[1]}.${dayMonthSplittedDate[2]}`;
    }
    const monthDaySplittedDate = obj.toLocaleDateString().split('/');
    return `${monthDaySplittedDate[1]}.${monthDaySplittedDate[0]}.${monthDaySplittedDate[2]}`;
  }
  return 'Error: not stirng given to readDate';
};

export default readDate;
