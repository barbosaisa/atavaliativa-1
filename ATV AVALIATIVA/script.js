function calculateIMC() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  const imc = weight / (height * height);
  displayResult(imc);
}

function displayResult(imc) {
  let resultText = '';
  let resultImageSrc = '';

  if (imc < 18.5) {
    resultText = 'Abaixo do peso.';
    resultImageSrc = 'magro.png';
  } else if (imc < 24.9) {
    resultText = 'Peso normal.';
    resultImageSrc = 'corpo-fino.png';
  } else if (imc < 29.9) {
    resultText = 'Sobrepeso.';
    resultImageSrc = 'corpo.png';
  } else if (imc < 34.9) {
    resultText = 'Obesidade grau 1.';
    resultImageSrc = 'sobrepeso.png';
  } else if (imc < 39.9) {
    resultText = 'Obesidade grau 2.';
    resultImageSrc = 'sobrepeso.png';
  } else {
    resultText = 'Obesidade grau 3.';
    resultImageSrc = 'sobrepeso.png';
  }

  const resultElement = document.getElementById('result');
  resultElement.querySelector('p').textContent = `Seu IMC é ${imc.toFixed(2)}. ${resultText}`;
  resultElement.querySelector('#resultImage').src = resultImageSrc;
}