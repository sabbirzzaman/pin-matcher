const generateBtn = document.getElementById('pin-generate');
const generateInput = document.getElementById('generate-input');
const keyPad = document.getElementById('key-pad');
const singleBtn = document.getElementById('button');
const calcInput = document.getElementById('calc-input');
const verifyError = document.getElementById('verify-error');
const verifySuccess = document.getElementById('verify-success');

const validation = document.getElementById('validation-id');
const warning = document.getElementById('warning');

function generateNumbers() {
  const pin = Math.random() * 10000;
  const pinStr = Math.round(pin) + '';

  if (pinStr.length == 4) {
    return pinStr;
  } else {
    return generateNumbers();
  }
}

generateBtn.addEventListener('click', function () {
  generateInput.value = generateNumbers();
});

keyPad.addEventListener('click', function (event) {
  const keyElement = event.target;
  const keyText = keyElement.innerText;
  if (keyElement.classList == 'button' && keyElement.id == false) {
    calcInput.value = calcInput.value + keyText;
  }

  if (keyElement.id == 'clear') {
    calcInput.value = '';
  }

  if (keyElement.matches('button')) {
    const unValid = 0;
    const pinNumber = generateInput.value;
    const myNumber = calcInput.value;
    const validCount = parseInt(validation.innerText);

    if (pinNumber == myNumber) {
      verifySuccess.style.display = 'block';
      verifyError.style.display = 'none';
    } else {
      verifyError.style.display = 'block';
      verifySuccess.style.display = 'none';
      validation.innerText = validCount - 1;
    }

    if (validation.innerText == unValid) {
      warning.style.display = 'block'
    }
  }
});
