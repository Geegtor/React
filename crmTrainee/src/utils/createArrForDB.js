const createArrForDB = (splitArr, fullList, property) => (
  splitArr[0] ? splitArr.reduce(
    (acc, current) => acc.concat(fullList.find((item) => item[property] === current)), [],
  ) : []
);

export default createArrForDB;
