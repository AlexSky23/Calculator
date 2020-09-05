let lastOperand = 0;
let operation = null;
let znak = "";

const inputWindow = document.getElementById('inputWindow');
const his = document.getElementById('his');
inputWindow.value = '0';


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

document.getElementById('btn_uni').addEventListener('click', function () {
    inputWindow.value = - inputWindow.value;
})

document.getElementById('btn_vesh').addEventListener('click', function () {
    inputWindow.value += '.';
})

document.getElementById('btn_1').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '1';
    }
    else {inputWindow.value += '1';}
})

document.getElementById('btn_2').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '2';
    }
    else {inputWindow.value += '2';}
})

document.getElementById('btn_3').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '3';
    }
    else {inputWindow.value += '3';}
})

document.getElementById('btn_4').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '4';
    }
    else {inputWindow.value += '4';}
})

document.getElementById('btn_5').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '5';
    }
    else {inputWindow.value += '5';}
})

document.getElementById('btn_6').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '6';
    }
    else {inputWindow.value += '6';}
})

document.getElementById('btn_7').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '7';
    }
    else {inputWindow.value += '7';}
})

document.getElementById('btn_8').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '8';
    }
    else {inputWindow.value += '8';}
})

document.getElementById('btn_9').addEventListener('click', function () {
    if(inputWindow.value === '0') {
        inputWindow.value = '9';
    }
    else {inputWindow.value += '9';}
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    znak = "+";
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
    znak = "-";
})

document.getElementById('btn_proiz').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'proiz';
    inputWindow.value = '';
    znak = "*";
})

document.getElementById('btn_del').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
    znak = "/";
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqrt';
    znak = "√";
})

document.getElementById('btn_calc').addEventListener('click', function () {

    if(operation === 'sum') {
        const rez = lastOperand + parseFloat(inputWindow.value);
        his.value += lastOperand + znak + inputWindow.value + "=" + rez + "\n"; 
        inputWindow.value = rez;
        operation = null;
        lastOperand = 0;
    }

    if(operation === 'def') {
        const rez = lastOperand - parseFloat(inputWindow.value);
        his.value += lastOperand + znak + inputWindow.value + "=" + rez + "\n"; 
        operation = null;
        lastOperand = 0;
        inputWindow.value = rez;
    }

    if(operation === 'proiz') {
        const rez = lastOperand * parseFloat(inputWindow.value);
        his.value += lastOperand + znak + inputWindow.value + "=" + rez + "\n"; 
        operation = null;
        lastOperand = 0;
        inputWindow.value = rez;
    }

    if(operation === 'del') {
        const rez = lastOperand / parseFloat(inputWindow.value);
        his.value += lastOperand + znak + inputWindow.value + "=" + rez + "\n"; 
        operation = null;
        lastOperand = 0;
        inputWindow.value = rez;
    }

    if(operation === 'sqrt') {
        var rez1 = parseFloat(inputWindow.value);
        const rez = Math.sqrt(rez1);
        his.value += znak + inputWindow.value + "=" + rez + "\n"; 
        inputWindow.value = rez;
    }

})