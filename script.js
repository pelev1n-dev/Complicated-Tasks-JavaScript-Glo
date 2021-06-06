'use strict'

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// 1
document.write(week.join(', ') + '<br>');
// 2
week.forEach( elem => {
  document.write(elem + '<br>');
});
// 3
week.forEach( elem => {
  if (elem === 'Суббота' || elem === 'Воскресенье') {
    document.write(elem.italics() + '<br>');
  } else {
    document.write(elem + '<br>');
  }
});
// 4
const date = new Date();
week.forEach(elem => {
  if (elem === week[date.getDay()]) {
    document.write(elem.bold() + '<br>');
  } else if (elem === 'Суббота' || elem === 'Воскресенье') {
    document.write(elem.italics() + '<br>');
  } else {
    document.write(elem + '<br>');
  }
});