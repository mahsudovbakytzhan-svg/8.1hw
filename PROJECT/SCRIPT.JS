// 1 tapsyrma

let greet = function(name){
  console.log ("привет мир "+ name)
}

greet ("Привет");

// 2 tapsyrma

const sayHello = (name)=>{
    console.log("hello, " + name + "!");
}

sayHello ("Bakytzhan")
sayHello ("Dana")
sayHello ("Dancho")
sayHello ("Didar")

let Hello =(name)=>{
   console.log("hi,"+ name + "?")
}
 Hello("15")

 //3 Tapsyrma
 const sum = (num1, num2)=>{
  console.log(num1 + num2)
 }
sum(5,7)
sum(6,8)

const nun = (sun1,sun2)=>{
  console.log(sun1*sun2)
}
nun(4,5)
nun(4,9)

//4tapsyrma

function isEven (number){
      return number % 2 ===0;
}
console.log(isEven(4));
console.log(isEven(7));


// 5 tapsyrma
  function max (number,number2 ) {
    if (number>number2){
      return number 
    }else if (number2>number){
     return number2
    }else {
      return "Числа равны"
    }
  }
 console.log (max(4,5))


 //6 tapsyrma

 function getInitials (name,surname){

  return name[0]+ "."+ surname[0]
 }

 console.log(getInitials("Alisa","Bobrova"))
 console.log(getInitials("Bakytzhan","Makhsudov"))

 //7 tapsyrma
 function square (number){

  return (number **2)

 }
 function cube (number){
  
  return  square(number) * number;
 }
 console.log(cube(6))
 console.log(square(5))



//8 tapsyrma 

function num (number) {
  return (number + number)
}
console.log(num(4))


// қосымша тапсырма 

function getFactorial (num){
  if (num == 1){
    return 1
  }
  return num * getFactorial(num-1)
}

console.log(getFactorial(5))