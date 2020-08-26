
let button = document.getElementById('click')

button.onclick = () =>{
    Result();
}


let Result = () =>{
    let number1 = prompt('Enter the first Number')
let number2 = prompt('Enter the second number')
let operation = prompt('Enter the operation')
    let getting;

    if (operation == '') {
        getting = 'the operation is Empty'
    } 
    else if (operation == '+') {

        getting = Number(number1) + Number(number2)
    } 
    else if (operation == '-') {

        getting = number1 - number2
    } 
    else if (operation == '*') {

        getting = number1 * number2
    } 
    else if (operation == '/') {

        getting = number1 / number2
    } 
    else {

getting = `This operation <span>  ${operation}  </span> does not exist`

    }

document.write('<h3>' + getting + '</h3>')
}

