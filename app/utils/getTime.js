import moment from 'moment';

export function getTime(time) {
  const now = moment().format('MM-DD');
  const _time = time;
  const date = moment.unix(_time).format('YYYY-MM-DD HH:mm');
  // if (date === now) {
  //   date = moment.unix(_time).format('HH:mm');
  // }
  // console.log(date);
  return date;
}