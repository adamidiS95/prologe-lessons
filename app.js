const projectName = 'Сайт магазина';
const price = 4000;
const author = 'Кристина Ковалева';
const template = author + ' заказала ' + projectName + ' по цене ' + price + '$'; 
console.log(template);
const template2 = `${author} заказала ${projectName} по цене ${price} $`;
console.log (template2);

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log (template3);

const template4 = `Проект
Цена: ${price}$`;
console.log (template4)