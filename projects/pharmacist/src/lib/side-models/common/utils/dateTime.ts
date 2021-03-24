import { Injectable } from '@angular/core';
export interface DatetimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

@Injectable()
export class DateTime {
  static diff(from, to): DatetimeDifference {

    if (!(from instanceof Date)) {
      from = new Date(from);
    }

    if (!(to instanceof Date)) {
      to = new Date(to);
    }

    const min = [-Infinity, 1, 1, 0, 0, 0, 0];
    const max = [Infinity, 12, null, 24, 60, 60, 1000];

    if (to < from) {
      const temp = to;
      to = from;
      from = temp;
    }

    const start = [from.getFullYear(), from.getMonth() + 1, from.getDate(), from.getHours(),
        from.getMinutes(), from.getSeconds(), from.getMilliseconds()],
      end = [to.getFullYear(), to.getMonth() + 1, to.getDate(), to.getHours(), to.getMinutes(),
        to.getSeconds(), to.getMilliseconds()];

    let i = 7;

    const dec = idx => {
      --end[idx];
      while (end[idx] < min[idx]) {
        const r = dec(idx - 1);
        end[idx] += max[idx] === null
          ? r
          : max[idx];
      }
      return idx === 1 ? new Date(end[0], end[1], 0).getDate() : max[idx + 1];
    };

    while (i > 0) {
      --i;
      let diff = end[i] - start[i];
      while (diff < 0) {
        end[i] += dec(i - 1);
        diff = end[i] - start[i];
      }
      end[i] = diff;
    }

    return {
      years: end[0],
      months: end[1],
      days: end[2],
      hours: end[3],
      minutes: end[4],
      seconds: end[5],
      milliseconds: end[6]
    };
  }

  static waiting(from): DatetimeDifference {
    return DateTime.diff(from, new Date());
  }

  static w8TimeFormatter(time: DatetimeDifference) {
    let str = '';
    let mins = '';
    let hs = '';

    time.minutes < 10 ? mins = '0' + time.minutes : mins = String(time.minutes);
    time.hours < 10 ? hs = '0' + time.hours : hs = String(time.hours);
    if (time.years) str += time.years + 'y ';
    if (time.months) str += time.months + 'm ';
    if (time.days) { str += time.days + 'd'; }
    str += ` ${hs}:${mins}`;

    return str;
  }

  currentDate(dateOnly: boolean = false) {
    function addZero(x, n) {
      let formattedNumber = String(x).slice(-n);
      if (formattedNumber.length < n && n < 3) formattedNumber = `0${formattedNumber}`;
      return formattedNumber;
    }
    const date = new Date();
    const formattedDate = date.getFullYear() + '-' + addZero(date.getMonth() + 1, 2) + '-' +  addZero(date.getDate(), 2);
    if (dateOnly) return formattedDate;
    return formattedDate + 'T' +
      addZero(date.getHours(), 2) + ':' + addZero(date.getMinutes(), 2) + ':' +
      addZero(date.getSeconds(), 2) + '.' +  addZero(date.getMilliseconds(), 3) + '000';
  }
}
