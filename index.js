const colors = require('colors')
// console.log(colors.red(`Hello world, ${process.argv[2]}`));
let numBegin = process.argv[2];
let numEnd = process.argv[3];

//Задание. Простые числа
function primeNumber (n){
  let i=2, j=0;
  if (n <= 1)
    return "";
  else {
    for (i; i<=n; i++){
      if (n % i == 0) {
        j++;
      }
    }
    if (j==1){
      return n;
    }
    return "";
  }
}

const mas = [];
if (isNaN(numBegin) || isNaN(numEnd)){
  console.log(colors.red('Введите числа'));
} else {
  while (numBegin <= numEnd){
    if (!primeNumber(numBegin)=="")
      mas.push(primeNumber(numBegin));
    numBegin++;
  }
}

let x=0;
if (mas.length < 1){
  console.log(colors.green('Простых чисел нет'));
} else {
  while (x < mas.length){
    console.log(colors.red(mas[x]));
    x++
    if(x >= mas.length){
      return;
    };
    console.log(colors.yellow(mas[x]));
    x++;
    if(x >= mas.length){
      return;
    };
    console.log(colors.green(mas[x]));
    x++;
  }
}