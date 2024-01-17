const readMultiselected = (data) => {
  let res = null;
  if (data instanceof Array) {
    res = '';
    data.forEach(
      (el) => { res += `${el.value}, `; },
    );
    res = res.slice(0, -2);
  } else {
    res = [];
    data.split(', ').map(
      (el) => res.push({ value: el, label: el }),
    );
  }
  return res;
};

export default readMultiselected;
