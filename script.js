const MODEL_URL = './pneumonia_detection_tfjs_model/model.json';
const imageSize = 150;
let model;

async function loadModel() {
  try {
    model = await tf.loadGraphModel(MODEL_URL);
    document.getElementById('predictButton').disabled = false;
  } catch (error) {
    console.error('Erro ao carregar o modelo:', error);
    document.getElementById('prediction-result').innerText = 'Erro ao carregar o modelo.';
  }
}

async function predict() {
  if (!model) {
    alert('O modelo ainda não foi carregado. Por favor, aguarde.');
    return;
  }

  const imageElement = document.getElementById('selectedImage');
  if (imageElement.src === '#' || imageElement.style.display === 'none') {
    alert('Por favor, selecione uma imagem primeiro.');
    return;
  }

  document.getElementById('prediction-result').innerText = 'Processando...';
  document.getElementById('predictButton').disabled = true;

  try {
    const tensor = tf.browser.fromPixels(imageElement)
      .resizeNearestNeighbor([imageSize, imageSize])
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();

    const prediction = await model.predict(tensor);
    const predictionValue = prediction.dataSync()[0];

    tensor.dispose();
    prediction.dispose();

    const threshold = 0.5;
    const result = predictionValue > threshold ? 'Pneumonia' : 'Normal';
    const confidence = (predictionValue * 100).toFixed(2);

    document.getElementById('prediction-result').innerText = `Resultado: ${result} (Confiança: ${confidence}%)`;
  } catch (error) {
    console.error('Erro ao fazer a previsão:', error);
    document.getElementById('prediction-result').innerText = 'Erro ao fazer a previsão.';
  }

  document.getElementById('predictButton').disabled = false;
}

document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgElement = document.getElementById('selectedImage');
      imgElement.src = e.target.result;
      imgElement.style.display = 'block';
      document.getElementById('prediction-result').innerText = '';
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('predictButton').addEventListener('click', predict);
window.onload = loadModel;
