const writeDate = (obj) => {
  const newObj = { ...obj };
  newObj.birthday = new Date(obj.birthday);
  return newObj;
};

export default writeDate;
