const fillZero = (n: number, digit: number) => {
  return `00000000${n}`.substr(-digit);
};

export const toDateString = (unixtime: number) => {
  const date = new Date(unixtime * 1000);
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}/${fillZero(m, 2)}/${fillZero(d, 2)}`;
};
