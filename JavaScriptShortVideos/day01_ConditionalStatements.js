// Same like Java

var num =10;
if(num<9){
    console.log(num+" is less than 9");
}else{
    console.log(num+" is grater than 9");
}

var str ="Aysel";
if(str.startsWith("J")){
    console.log(str+" starts with J");
}else if(str.startsWith("A")){
    console.log(str+" starts with A");
}else{
    console.log(str+" starts with sometghing");
}

var num = 8.5;
switch(num){
    case 5.5:
    console.log("number is 5.5");
    break;

    case 8.5:
    console.log("number is 8.5");
    break;

    default:
        console.log("Unnown number");
}

var num = false;
switch(num){
    case true:
    console.log("number is true");
    break;

    case false:
    console.log("number is false");
    break;

    default:
        console.log("Unnown number");
}

  var number = true ? 15 : 20;
  console.log(number);  // 15

  var number = false ? 15 : 20;
  console.log(number);  // 20

  var n1 = 0;
  if(8>9){
      n1=8;
  }else if (8===9){
      n1 =9;
  }else{
      n1=0;
  }
  console.log(n1);

  var n2 = (8>9) ? 8 :(8===9) ? 9 : 0;

  console.log(n2);