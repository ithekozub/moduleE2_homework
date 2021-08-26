let value = prompt('Input some value');
++value;
let valueType = typeof(value);
console.log(value);

if (valueType == 'number'){
  if (value % 2){
    console.log('Нечет')
  } else{
    console.log('Чет')
  }
  
} else {
  console.log('Упс, кажется, вы ошиблись')
}

if (isNaN(value)){
  console.log('NaN')
}