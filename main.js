const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const h2 = document.querySelector('h2')








button.addEventListener('click', function () {

    var a = input.value;
    if (a % 15=== 0 ){
        h2.textContent="FizzBuzz";
    }
    else  if (a % 5=== 0 ){
        h2.textContent="Fizz";
    }
    else  if (a % 3===0){
        h2.textContent="Buzz";
    }
    else {
        h2.textContent="Error!";
    }



})


const array = [4,7,9,6];
array.shift();
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}




























