const display = document.getElementById('result');

const clear = document.getElementById('clear');
const back = document.getElementById('back');
const dot = document.getElementById('dot');
const multiply = document.getElementById('multiply');
const division = document.getElementById('division');
const addition = document.getElementById('add');
const subtract = document.getElementById('subtract');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');

const zero = document.getElementById('zero');
const dzero = document.getElementById('dzero');
const equal = document.getElementById('equal');


clear.addEventListener('click', clearbtnClick);
back.addEventListener('click', backbtnClick);
dot.addEventListener('click', dotbtnClick);
multiply.addEventListener('click', multibtnClick);
division.addEventListener('click', divbtnClick);
addition.addEventListener('click', addbtnClick);
subtract.addEventListener('click', subtractbtnClick);
seven.addEventListener('click', sevenbtnClick);
eight.addEventListener('click', eightbtnClick);
nine.addEventListener('click', ninebtnClick);
four.addEventListener('click', fourbtnClick);
five.addEventListener('click', fivebtnClick);
six.addEventListener('click', sixbtnClick);
one.addEventListener('click', onebtnClick);
two.addEventListener('click', twobtnClick);
three.addEventListener('click', threebtnClick);
zero.addEventListener('click', zerobtnClick);
dzero.addEventListener('click', dzerobtnClick);
equal.addEventListener('click', equalbtnClick);

function clearbtnClick() {
        display.value="";
}
function backbtnClick() {
  const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}
function dotbtnClick() {
  const currentValue = display.value;
  if( currentValue.slice(-1)!="+"&&currentValue.slice(-1)!="."&&currentValue.slice(-1)!="x"&&currentValue.slice(-1)!="-"&&currentValue.slice(-1)!="/")
  {
  display.value = currentValue+".";
  }
}

function multibtnClick() {
  const currentValue = display.value;
  if( currentValue.slice(-1)!="+"&&currentValue.slice(-1)!="."&&currentValue.slice(-1)!="x"&&currentValue.slice(-1)!="-"&&currentValue.slice(-1)!="/")
    {
  display.value = currentValue+"*";
    }
}
function divbtnClick() {
  const currentValue = display.value;
  if( currentValue.slice(-1)!="+"&&currentValue.slice(-1)!="."&&currentValue.slice(-1)!="x"&&currentValue.slice(-1)!="-"&&currentValue.slice(-1)!="/")
    {
  display.value = currentValue+"/";
    }
}
function addbtnClick() {
  const currentValue = display.value;
  if( currentValue.slice(-1)!="+"&&currentValue.slice(-1)!="."&&currentValue.slice(-1)!="x"&&currentValue.slice(-1)!="-"&&currentValue.slice(-1)!="/")
    {
  display.value = currentValue+"+";
    }
}
function subtractbtnClick() {
  const currentValue = display.value;
  if( currentValue.slice(-1)!="+"&&currentValue.slice(-1)!="."&&currentValue.slice(-1)!="x"&&currentValue.slice(-1)!="-"&&currentValue.slice(-1)!="/")
    {
  display.value = currentValue+"-";
    }
}

function sevenbtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"7";
}
function eightbtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"8";
}
function ninebtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"9";
}
function fourbtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"4";
}
function fivebtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"5";
}
function sixbtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"6";
}
function onebtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"1";
}
function twobtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"2";
}
function threebtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"3";
}

function zerobtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"0";
}
function dzerobtnClick() {
  const currentValue = display.value;
  display.value = currentValue+"00";
}
function equalbtnClick() {
  const currentValue = display.value;
  display.value = eval(currentValue);
}


document.addEventListener('DOMContentLoaded', () => {

  display.addEventListener('keydown', (event) => {
      if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(event.key)) {
          return;
      }
      if (!/^[0-9]$/.test(event.key)) {
          event.preventDefault();
          alert("Only Numbers are Allowed");
      }
  });
});