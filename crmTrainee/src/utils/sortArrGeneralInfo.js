function sortListArray(list, property, obj) {
  const arr = list.filter(
    (el) => el[property] !== obj?.[property],
  );
  arr.unshift(obj);
  return arr;
}

export default sortListArray;
