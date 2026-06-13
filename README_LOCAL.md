# Execução local

1. Instale as dependências com `pip install -r requirements.txt`.
2. Execute o notebook em ordem para treinar e exportar o modelo.
3. Para a parte web, sirva a pasta com `python -m http.server 8000` e abra `http://localhost:8000`.
4. O modelo TensorFlow.js deve ficar em `pneumonia_detection_tfjs_model/` ao lado de `index.html` e `script.js`.

## Observação

O fluxo web foi separado do notebook para funcionar fora do Colab.
