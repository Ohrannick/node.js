const colors = require('colors')
// console.log(colors.red(`Hello world, ${process.argv[2]}`));

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

  var mas = [], count = 0;
  while (count <= process.argv[2]){
    if (!primeNumber(count)=="")
      mas.push(primeNumber(count));
    count++;
  }

let i=0;
while (i<mas.length){
  console.log(colors.red(mas[i]));
  i++
  if(i >= mas.length){
    return;
  };
  console.log(colors.yellow(mas[i]));
  i++;
  if(i >= mas.length){
    return;
  };
  console.log(colors.green(mas[i]));
  i++;
}