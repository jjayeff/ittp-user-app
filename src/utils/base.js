import moment from 'moment';
import 'moment/locale/th';

// set format money
Number.prototype.format = function (n, x) {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

export const Money = (money) => {
  return money.format();
};

export const DateFormat = (date) => {
  return moment(date).add(543, 'year').format('D MMMM YYYY');
};
