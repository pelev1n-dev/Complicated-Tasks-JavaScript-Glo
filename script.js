'use strict'
let text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Donec eu nisi mi. Aenean leo lectus, maximus sit amet aliquet sit amet, luctus ac turpis. ' +
  'Mauris laoreet efficitur vestibulum. Praesent vitae nunc nec tortor congue sagittis. ' +
  'Sed porta elit et velit eleifend, et lobortis nisi tempus. ' +
  'In aliquet nulla ut ante ullamcorper, eget rhoncus metus condimentum. ' +
  'Nam magna velit, sodales a laoreet rutrum, porttitor vel diam.'
let text2 = 'Lorem ipsum dolor sit amet';
let text3 = 1112;
const getSliceText = function (text) {
  if (typeof text !== 'string' ) {
    return alert('В аргумент передана не строка');
  } else {
    text = text.trim();
    return text.length > 30 ? text.slice(0, 30) + '...' : text;
  }
};
console.log(getSliceText(text1));
console.log(getSliceText(text2));
console.log(getSliceText(text3));