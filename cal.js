//fetching all buttons
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

//to perform operations
var operand1 = 0;
var operand2 = null;
var operator = null;


function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}


for (var i = 0; i < buttons.length; i++) {
    //handling event of ith button
    buttons[i].addEventListener('click', function () {
        
        //fetch the value of button
        var value = this.getAttribute('data-value');
        //storing text to fetch value
        var text = display.textContent.trim();

        if (isOperator(value)) {
            //set operator and operand1 value
            operator = value;
            operand1 = parseFloat(text); //get value from text in string form
            display.textContent = "";   //clear the display screen
        } 
        else if (value == "ac") {
            display.textContent = "";
        }
         else if (value == "sign") {
             //fetch the operand and add sign
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } 
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } 
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        }
         else if (value == "=") {
            //set operand2 value and evaluate the result
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
         else {
             //if value is neither a operand nor operator , then add to display string
            display.textContent += value;
        }
    });
}