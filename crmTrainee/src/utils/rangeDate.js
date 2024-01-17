const rangeDate = (
  start = new Date(0),
  stop = new Date(),
  step = 1,
) => Array.from(
  { length: (stop.getFullYear() - start.getFullYear()) / step + 1 },
  (_, i) => start.getFullYear() + (i * step),
);

export default rangeDate;
