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
const buttonEquals = document.getElementById("equals");
const calculatorDisplay = document.getElementById("calculator-display");
let inputNum1;
let inputNum2;
let operator;
let accumulator;
let count = 0;

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

function doMath() {
    switch (operator) {
  case '+':
    if (accumulator === undefined) {
        accumulator = Number(inputNum1) + Number(inputNum2);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    } else {
        
        accumulator += Number(inputNum2);
        console.log(accumulator);
        calculatorDisplay.value = accumulator;
        inputNum2 = undefined;
    }
    break;
  case 'editor':
    console.log('Content editing access granted.');
    break;
  case 'viewer':
    console.log('Read-only access granted.');
    break;
  default:
    console.log('Access denied. Unknown role.');
    }
}

// +
buttonPlus.addEventListener("click", function() {
    if (inputNum2 === undefined) {
        calculatorDisplay.value = '';
        operator = '+';
    } else {
        calculatorDisplay.value = '';
        doMath();
    }
});

// =
buttonEquals.addEventListener("click", function() {
    switch (operator) {
  case '+':
    calculatorDisplay.value = '';
    doMath();
    break;
  case 'editor':
    console.log('Content editing access granted.');
    break;
  case 'viewer':
    console.log('Read-only access granted.');
    break;
  default:
    console.log('Access denied. Unknown role.');
}
});



buttonTwo.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '2';
        } else {
            inputNum1 += '2';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '2';
        } else {
            inputNum2 += '2';
        }
            
    }
});
buttonThree.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '3';
        } else {
            inputNum1 += '3';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '3';
        } else {
            inputNum2 += '3';
        }
            
    }
});
buttonFour.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '4';
        } else {
            inputNum1 += '4';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '4';
        } else {
            inputNum2 += '4';
        }
            
    }
});
buttonFive.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '5';
        } else {
            inputNum1 += '5';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '5';
        } else {
            inputNum2 += '5';
        }
            
    }
});
buttonSix.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '6';
        } else {
            inputNum1 += '6';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '6';
        } else {
            inputNum2 += '6';
        }
            
    }
});
buttonSeven.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '7';
        } else {
            inputNum1 += '7';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '7';
        } else {
            inputNum2 += '7';
        }
            
    }
});
buttonEight.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '8';
        } else {
            inputNum1 += '8';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '8';
        } else {
            inputNum2 += '8';
        }
            
    }
});
buttonNine.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '9';
        } else {
            inputNum1 += '9';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '9';
        } else {
            inputNum2 += '9';
        }
            
    }
});
buttonZero.addEventListener("click", function() {
    if (operator === undefined) {
        if (inputNum1 === undefined) {
            inputNum1 = '0';
        } else {
            inputNum1 += '0';
        }
    } else {
        if (inputNum2 === undefined) {
            inputNum2 = '0';
        } else {
            inputNum2 += '0';
        }
            
    }
});






// if 