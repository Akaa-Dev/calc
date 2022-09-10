const buttons = document.querySelector('.all-buttons');
const operator = document.getElementById('sign-dsp');
const display = document.getElementById('main-dsp');
const numberDisplayRight = document.getElementById('num-dsp-right');
const numberDisplayLeft = document.getElementById('num-dsp-left');
const secDisp = document.getElementById('sec-dsp');
const historyBtn = document.getElementById('history');
const historyPanel = document.getElementById('history-panel');
const historyList = document.querySelector('.history-list')
const clrHist = document.getElementById('clear-history-btn');
const historyEntry = document.getElementById('history-entry');
let operatorIsDefined = false;
let operation = 'calculation';
let processed = false;
let backSpace = document.getElementById('backspace');
let preOp;


buttons.addEventListener('click', (event) => {
    switch (event.target.id) {
        case 'clear':
            numberDisplayRight.innerText = '';
            numberDisplayLeft.innerText = '';
            operator.innerText = '';
            updateSecDisplay();
            operatorIsDefined = false;
            processed = false;
            break;
        case 'bracket':
            operator.innerText = '';
            break;
        case 'percent':
            operator.innerText = '%';
            operation = 'percent';
            operatorIsDefined = true;
            updateSecDisplay();
            processed = false;
            break;

        case 'division':
            if (numberDisplayLeft.textContent != ''&&processed==false) {
                operator.innerHTML = '<i class="fa-regular fa-divide"></i>';
                operatorIsDefined = true;
                operation = 'divide';
                processed = false;
                preOp='divide';
            }
            // if (operatorIsDefined == true && numberDisplayRight.textContent != '') {
            //     thirdOperator();
            //     operatorIsDefined = true;
            // }
            break;
        case 'seven':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '7';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '7';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '7';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '7';
                    } else {
                        numberDisplayRight.innerText += '7';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '7';
                processed = false;
            }
            break;
        case 'eight':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '8';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '8';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '8';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '8';
                    } else {
                        numberDisplayRight.innerText += '8';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '8';
                processed = false;
            }
            break;
        case 'nine':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '9';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '9';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '9';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '9';
                    } else {
                        numberDisplayRight.innerText += '9';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '9';
                processed = false;
            }
            break;

        case 'multiply':
            if (numberDisplayLeft.textContent != ''&&operatorIsDefined==false) {
                operator.innerHTML = '<i class="fa-regular fa-xmark"></i>';
                operatorIsDefined = true;
                operation = 'multiply';
                preOp='multiply'
                processed = false;
            }
            // if (operatorIsDefined == true && numberDisplayRight.textContent != '') {
            //     thirdOperator();
            //     operation = 'multiply';
            //    operatorIsDefined=true;
            // }
            break;

        case 'four':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '4';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '4';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '4';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '4';
                    } else {
                        numberDisplayRight.innerText += '4';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '4';
                processed = false;
            }
            break;

        case 'five':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '5';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '5';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '5';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '5';
                    } else {
                        numberDisplayRight.innerText += '5';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '5';
                processed = false;
            }
            break;

        case 'six':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '6';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '6';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '6';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '6';
                    } else {
                        numberDisplayRight.innerText += '6';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '6';
                processed = false;
            }
            break;

        case 'substract':
            if (numberDisplayLeft.textContent != '') {
                operator.innerHTML = '<i class="fa-regular fa-minus">';
                operatorIsDefined = true;
                processed = false;
                operation = 'substract';
            }
            // if (operatorIsDefined == true && numberDisplayRight.textContent != '') {
            //     thirdOperator('substract');
            // }
            break;

        case 'one':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '1';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '1';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '1';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '1';
                    } else {
                        numberDisplayRight.innerText += '1';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '1';
                processed = false;
            }
            break;

        case 'two':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) {
                numberDisplayLeft.innerText = '2';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '2';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '2';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '2';
                    } else {
                        numberDisplayRight.innerText += '2';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '2';
                processed = false;
            }
            break;

        case 'three':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.' && processed == true) { // replacing zero in the begining of a number to just a number, e.g: 03 == 3..
                numberDisplayLeft.innerText = '3'; // and checking for decimal.
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '3';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '3';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '3';
                    } else {
                        numberDisplayRight.innerText += '3';
                    }
                    updateSecDisplay();
                }
            } else {
                numberDisplayLeft.innerText = '3';
                processed = false;
            }
            break;

        case 'add':
            if (numberDisplayLeft.textContent != '') {
                operator.innerHTML = '<i class="fa-regular fa-plus"></i>';
                operatorIsDefined = true;
                processed = false;
                preOp = 'add';
            }
            // if (operatorIsDefined == true && numberDisplayRight.textContent != '') {
            //     operation='add'
            //     processed=false;
            //     thirdOperator();   
            // }
            break;

        case 'p_minus':
            operator.innerHTML = '';
            break;

        case 'zero':
            if (!processed) {
                if (!operatorIsDefined && numberDisplayLeft.innerText[0] != 0) {
                    numberDisplayLeft.innerText += '0';
                } else if (operatorIsDefined == true && numberDisplayRight.innerText[0] != 0) {
                    numberDisplayRight.innerText += '0';
                }
                updateSecDisplay();
            } else {
                numberDisplayLeft.innerText = '0';
                processed = false;
            }
            break;
        case 'dot':
            if (!processed) {
                if (!operatorIsDefined) {
                    if (numberDisplayLeft.textContent == '') {
                        numberDisplayLeft.innerText = '0.';
                    } else {
                        for (let i = 0; i < numberDisplayLeft.innerText.length; i++) {
                            if (numberDisplayLeft.innerText.includes(".") == false) {
                                numberDisplayLeft.innerText += '.';
                            }
                        }
                    }

                } else {
                    if (numberDisplayRight.textContent == '') {
                        numberDisplayRight.innerText = '0.';
                    } else {
                        for (let i = 0; i < numberDisplayRight.innerText.length; i++) {
                            if (numberDisplayRight.innerText.includes(".") == false) {
                                numberDisplayRight.innerText += '.';
                            }
                        }
                    }
                }
            } else {
                numberDisplayLeft.innerText = '0.';
                processed = false;
            }
            break;

        case 'equals':
            if ((operation != 'percent' && numberDisplayRight.innerText == '') || numberDisplayLeft.innerText == '') {
                numberDisplayLeft.innerText = numberDisplayLeft.innerText;
            } else {
                secDisp.innerText = '';
                let result = (calculator(operation, numberDisplayLeft, numberDisplayRight)).toPrecision(10);
                addTask(numberDisplayLeft, numberDisplayRight, parseFloat(result).toPrecision());
                numberDisplayRight.innerText = '';
                numberDisplayLeft.innerText = parseFloat(result).toPrecision();
                operator.innerText = '';
                operatorIsDefined = false;
                processed = true;
            }
            break;
    }

});

let calculator = (operation, numberDisplayLeft, numberDisplayRight) => {
    let result = 0;
    switch (operation) {
        case 'add':
            result = parseFloat(numberDisplayLeft.innerText) + parseFloat(numberDisplayRight.innerText);
            break;

        case 'substract':
            result = parseFloat(numberDisplayLeft.innerText) - parseFloat(numberDisplayRight.innerText);
            break;

        case 'multiply':
            result = (parseFloat(numberDisplayLeft.innerText) * parseFloat(numberDisplayRight.innerText));
            break;

        case 'divide':
            result = parseFloat(numberDisplayLeft.innerText) / parseFloat(numberDisplayRight.innerText);
            break;

        case 'percent':
            if (numberDisplayRight.innerText == '') {
                result = parseFloat(numberDisplayLeft.innerText) / 100;

            } else {
                result = (parseFloat(numberDisplayLeft.innerText) / 100) * parseFloat(numberDisplayRight.innerText);
            }
            break;
        default:
            result = parseFloat(numberDisplayLeft.innerText);
            break;
    }
    return result;
}
// updateSecDisplay shows a live result of calculations before the equals button is hit. It changes as numbers on the right side of the operator changes. 
let updateSecDisplay = () => {
    let result = (calculator(operation, numberDisplayLeft, numberDisplayRight)).toPrecision(10);
    if ((operation != 'percent' && numberDisplayRight.innerText == '') || operatorIsDefined == false) {
        secDisp.innerText = '';
    } else if ((operation == 'divide' && numberDisplayRight.innerText == 0)) {
        secDisp.innerText = "Oh no!, you divided with zero";
    } else {
        secDisp.innerText = parseFloat(result).toPrecision();
    }
    if(operatorIsDefined==true &&  numberDisplayRight.innerText !== ''){
        numberDisplayLeft.innerText =result.toPrecision();
        numberDisplayRight.innerText="";
    }
}

backSpace.addEventListener('click', () => {
    let inputed = '';
    let updated = '';
    if (!operatorIsDefined) {
        inputed = numberDisplayLeft.innerText.split('');
        inputed.pop();
        updated = inputed.join('');
        numberDisplayLeft.innerText = updated;
    } else {
        if (numberDisplayRight.textContent == '') {
            if (operator.innerHTML == '% <i class="fa-regular fa-xmark"></i> ') {
                operator.innerHTML = '%';
            } else {
                operator.innerHTML = '';
                operatorIsDefined = false;
            }
        } else {
            inputed = numberDisplayRight.innerText.split('');
            inputed.pop();
            updated = inputed.join('');
            numberDisplayRight.innerText = updated;
        }
        updateSecDisplay();
    }

    processed = false;
});

historyBtn.addEventListener('click', () => {
    if (historyBtn.innerHTML == '<i class="fa-2x fa-solid fa-calculator"></i>') {
        historyBtn.innerHTML = '<i class="fa-2x fa-solid fa-clock-rotate-left"></i>';
        historyPanel.style.display = 'none';
    } else if (historyBtn.innerHTML = '<i class="fa-2x fa-solid fa-clock-rotate-left"></i>') {
        historyBtn.innerHTML = '<i class="fa-2x fa-solid fa-calculator"></i>';
        historyPanel.style.display = 'block';
    }
})

clrHist.addEventListener('click', () => {
    while (historyEntry.firstChild) {
        historyEntry.removeChild(historyEntry.firstChild);
    }
})
const thirdOperator = () => {
    let previousResult = updateSecDisplay();
    numberDisplayLeft.innerText = previousResult;
    numberDisplayRight.innerText='';
    return previousResult;
}

//addTask adds the calculation task to the history list; the history does not exceed twenty.
let addTask = (numberDisplayLeft, numberDisplayRight, result) => {
    let taskItem = document.createElement('li');
    let task = document.createElement('div');
    let finalResult = document.createElement('div');
    let leftInput = numberDisplayLeft.innerText;
    let rightInput = numberDisplayRight.innerText;
    let sign = operator.innerHTML;

    task.innerHTML = `${leftInput} ${sign} ${rightInput}`;
    finalResult.textContent = `=${result}`;
    taskItem.appendChild(task);
    taskItem.appendChild(finalResult);
    while (historyEntry.children.length >= 20) {
        historyEntry.removeChild(historyEntry.firstChild);
    }
    historyEntry.appendChild(taskItem);
    taskItem.style.marginBottom = '20px';
    finalResult.style.color = '#55E226';
    finalResult.style.fontSize = "18px";
}