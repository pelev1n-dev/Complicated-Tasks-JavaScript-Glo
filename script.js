'use strict'

let lang = prompt("Введите язык 'ru' или 'en'");

 if (lang === 'ru') {
   console.log('понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье');
 } else if (lang === 'en') {
   console.log('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
 } else {
   console.log("Введен язык не 'ru' и не 'en'");
 }

 switch (lang) {
   case 'ru': console.log('понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье')
     break;
  case 'en': console.log('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')
     break;
  default: console.log("Введен язык не 'ru' и не 'en'")
}

let arrLang = [];

arrLang['ru'] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
arrLang['en'] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(arrLang[lang]);



 let namePerson;
 namePerson = 'Артем';
 namePerson = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');
 namePerson = 'Максим';
 namePerson = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');
 namePerson = 'Дмитрий';
 namePerson = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');