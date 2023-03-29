export const timeStamp = (_time) => {
  let time = (new Date().getTime() - new Date(_time).getTime()) / 1000;
  let year = time / 3600 / 24 / 365;
  if (parseInt(year) > 0) return parseInt(year) + "year ago";
  let day = year * 365;
  if (parseInt(day) > 0) return parseInt(day) + "day ago";
  let hour = day * 24;
  if (parseInt(hour) > 0) return parseInt(hour) + "hour ago";
  let min = hour * 60;
  if (parseInt(min) > 0) return parseInt(min) + "min ago";
  let sec = min * 60;
  if (parseInt(min) > 0) return parseInt(sec) + "sec ago";
};
