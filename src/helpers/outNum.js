export const outNum = (number, element, time = 500, step = 50) => {
  if (!element) return;

  let num = 0;
  let t = Math.round(time / (number / step));

  const interval = setInterval(() => {
    num = num + step;
    if (num >= number) {
      num = number;
      clearInterval(interval);
    }
    element.innerHTML = num;
  }, t);
};
