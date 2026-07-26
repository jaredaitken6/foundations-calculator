const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const buttonFive = document.getElementById("five");
const buttonSix = document.getElementById("six");
const buttonSeven = document.getElementById("seven");
const buttonEight = document.getElementById("eight");
const buttonNine = document.getElementById("nine");
const buttonZero = document.getElementById("zero");
const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals");
const calculatorDisplay = document.getElementById("calculator-display");
const buttonClear = document.getElementById("clear");
let inputNum1;
let inputNum2;
let operator;
let accumulator;

function clearCalculator() {
 inputNum1 = undefined;
 inputNum2 = undefined;
 operator = undefined;
 accumulator = undefined;
 calculatorDisplay.value = '';
}

buttonClear.addEventListener("click", function() {
    clearCalculator();
});


function operate() {
    switch (operator) {
  case '+':
    if (accumulator === undefined) {
        accumulator = Number(inputNum1) + Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    } else {        
        accumulator += Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    }
    break;
  case '-':
    if (accumulator === undefined) {
        accumulator = Number(inputNum1) - Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    } else {
        
        accumulator -= Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    }
    break;
  case 'x':
    if (accumulator === undefined) {
        accumulator = Number(inputNum1) * Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    } else {
        
        accumulator *= Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    }
    break;
  case '/':

    if (!accumulator === '0' || !inputNum2 === '0') {
        if (accumulator === undefined) {
            accumulator = Number(inputNum1) / Number(inputNum2);        
                if (accumulator.toString().length >= 10) {
                    calculatorDisplay.value = 'Number too long'               
                }       
            inputNum2 = undefined;
        } else {
            accumulator /= Number(inputNum2);
            if (accumulator.toString().length >= 10) {
                calculatorDisplay.value = 'Number too long'            
            } 
            if (accumulator.toString().includes('.')) {
                calculatorDisplay.value = accumulator.toFixed(2);
            }        
            inputNum2 = undefined;
        }
    } else {
        calculatorDisplay.value = 'not allowed';
        inputNum1 = undefined;
        inputNum2 = undefined;
        operator = undefined;
        accumulator = undefined;
    }
    break;
    default:
        console.log('No numbers were inputted.');
    }
}

// +
buttonPlus.addEventListener("click", function() {
    if (inputNum2 === undefined) {
        calculatorDisplay.value = '';
        operator = '+';
    } else {
        calculatorDisplay.value = '';
        operate();
        operator = '+';
    }
});

// -
buttonMinus.addEventListener("click", function() {
    if (inputNum2 === undefined) {
        calculatorDisplay.value = '';
        operator = '-';
    } else {
        calculatorDisplay.value = '';
        operate();
        operator = '-';
    }
});

// x
buttonMultiply.addEventListener("click", function() {
    if (inputNum2 === undefined) {
        calculatorDisplay.value = '';
        operator = 'x';
    } else {
        calculatorDisplay.value = '';
        operate();
        operator = 'x';
    }
});

// ÷
buttonDivide.addEventListener("click", function() {
    if (inputNum2 === undefined) {
        calculatorDisplay.value = '';
        operator = '/';
    } else {
        calculatorDisplay.value = '';
        operate();
        operator = '/';
    }
});

// =
buttonEquals.addEventListener("click", function() {
    calculatorDisplay.value = '';
    operate();
});

buttonOne.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '1';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '1';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '1';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '1';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});

buttonTwo.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '2';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '2';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '2';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '2';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonThree.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '3';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '3';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '3';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '3';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonFour.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '4';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '4';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '4';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '4';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonFive.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '5';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '5';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '5';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '5';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonSix.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '6';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '6';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '6';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '6';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonSeven.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '7';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '7';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '7';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '7';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonEight.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '8';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '8';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '8';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '8';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonNine.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '9';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '9';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '9';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '9';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});
buttonZero.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '0';
            calculatorDisplay.value = inputNum1;
        } else {
            inputNum1 += '0';
            calculatorDisplay.value = inputNum1;
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '0';
            calculatorDisplay.value = inputNum2;
        } else {
            inputNum2 += '0';
            calculatorDisplay.value = inputNum2;
        }
            
    }
});









// if 