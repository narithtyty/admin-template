/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Date {
  formatDateThai: (pattern: string) => string;
  formatDate: (pattern: string) => string;
}
interface String {
  numberOnly: () => string;
  decimalOnly: () => string;
  formatToPattern: (pattern: string) => string;
  formatToCurrency: () => string;
}
interface Number {
  formatToCurrency: () => string;
}

Date.prototype.formatDateThai = function (pattern: string) {
  const options: any = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    calendar: 'buddhist',
  };

  const formatter = new Intl.DateTimeFormat('th-TH', options);
  const parts = formatter.formatToParts(this);

  const map = new Map();
  for (const part of parts) {
    map.set(part.type, part.value);
  }

  let date = '';
  let time = '';
  let month = '';
  let year = '';
  switch (pattern) {
    case 'YYYY-MM-DD':
      return map.get('year') + '-' + map.get('month') + '-' + map.get('day');
    case 'MM/DD/YYYY':
      return map.get('month') + '/' + map.get('day') + '/' + map.get('year');
    case 'DD-MM-YYYY':
      return map.get('day') + '-' + map.get('month') + '-' + map.get('year');
    case 'YYYY-MM-DDTHH:mm:ssZ':
      return (
        map.get('year') +
        '-' +
        map.get('month') +
        '-' +
        map.get('day') +
        'T' +
        map.get('hour') +
        ':' +
        map.get('minute') +
        ':' +
        map.get('second') +
        '+00:00'
      );
    case 'MMM DD, YYYY':
      month = new Date(this).toLocaleDateString('th-TH', {
        month: 'long',
        calendar: 'buddhist',
      });
      return month + ' ' + map.get('day') + ', ' + map.get('year');
    case 'DD MMM YYYY':
      month = new Date(this).toLocaleDateString('th-TH', {
        month: 'short',
        calendar: 'buddhist',
      });
      return map.get('day') + ' ' + month + ' ' + map.get('year');
    case 'DD MM YY':
      year = map.get('year').slice(-2);
      month = new Date(this).toLocaleDateString('th-TH', {
        month: 'short',
        calendar: 'buddhist',
      });
      return map.get('day') + ' ' + month + ' ' + year;
    case 'DD/MM/YYYY HH:mm':
      date = map.get('day') + '/' + map.get('month') + '/' + map.get('year');
      time = map.get('hour') + ':' + map.get('minute');
      return date + ' ' + time;
    case 'DD/MM/YY HH:mm':
      year = map.get('year').slice(-2);
      return (
        map.get('day') +
        '/' +
        map.get('month') +
        '/' +
        year +
        ' ' +
        map.get('hour') +
        ':' +
        map.get('minute')
      );
    case 'DD/MM/YY':
      year = map.get('year').slice(-2);
      return map.get('day') + '/' + map.get('month') + '/' + year;
    case 'DD / MM / YY':
      year = map.get('year').slice(-2);
      return map.get('day') + ' / ' + map.get('month') + ' / ' + year;
    default:
      return formatter.format(this);
  }
};

Date.prototype.formatDate = function (pattern: string) {
  const options: any = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(this);

  const map = new Map();
  for (const part of parts) {
    map.set(part.type, part.value);
  }
  let month = '';
  let date = '';
  let time = '';
  switch (pattern) {
    case 'YYYY-MM-DD':
      return map.get('year') + '-' + map.get('month') + '-' + map.get('day');
    case 'MM/DD/YYYY':
      return map.get('month') + '/' + map.get('day') + '/' + map.get('year');
    case 'DD-MM-YYYY':
      return map.get('day') + '-' + map.get('month') + '-' + map.get('year');
    case 'YYYY-MM-DDTHH:mm:ssZ':
      return (
        map.get('year') +
        '-' +
        map.get('month') +
        '-' +
        map.get('day') +
        'T' +
        map.get('hour') +
        ':' +
        map.get('minute') +
        ':' +
        map.get('second') +
        '+00:00'
      );
    case 'MMM DD, YYYY':
      month = new Date(this).toLocaleDateString('en-US', { month: 'long' });
      return month + ' ' + map.get('day') + ', ' + map.get('year');
    case 'DD/MM/YYYY HH:mm':
      date = map.get('day') + '/' + map.get('month') + '/' + map.get('year');
      time = map.get('hour') + ':' + map.get('minute');
      return date + ' ' + time;
    default:
      return formatter.format(this);
  }
};

String.prototype.formatToPattern = function (pattern: string) {
  let formattedText = '';
  let textIndex = 0;
  if (this) {
    for (let i = 0; i < pattern.length; i++) {
      const currentChar = pattern[i];

      if (currentChar.toLowerCase() === 'x') {
        formattedText += this[textIndex];
        textIndex++;
      } else {
        formattedText += currentChar;
      }

      if (textIndex >= this.length) {
        break; // Stop formatting if we reach the end of the text
      }
    }
  }
  return formattedText;
};
String.prototype.numberOnly = function () {
  return this.replace(/\D/gm, '');
};
String.prototype.decimalOnly = function () {
  return this.replace(/(\.\d*)\.+/g, '$1').replace(/[^\d.]/g, '');
};
String.prototype.formatToCurrency = function () {
  return this.numberOnly() === ''
    ? ''
    : new Intl.NumberFormat('en-US').format(Number(this.numberOnly()));
};
Number.prototype.formatToCurrency = function () {
  return this.toString().formatToCurrency();
};
// Example
// const date = new Date('2012-12-22T21:45:00Z')
// console.log(date.formatDateThai('YYYY-MM-DD')) // Output: 2555-12-22
// console.log(date.formatDateThai('MM/DD/YYYY')) // Output: 12/22/2555
// console.log(date.formatDateThai('DD-MM-YYYY')) // Output: 22-12-2555
// console.log(date.formatDateThai('YYYY-MM-DDTHH:mm:ssZ')) // Output: 2555-12-22T21:45:00+00:00
// console.log(date.formatDateThai('MMM DD, YYYY')) // Output: ธันวาคม 22, 2555
// console.log(date.formatDateThai('DD MMM YYYY')) // Output: 22 ธ.ค  2555
// console.log(date.formatDateThai('DD/MM/YYYY HH:mm'))
// console.log('1234567890'.formatToPattern('xxx-xxx-xxxx'))
