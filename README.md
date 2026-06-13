# CDPRO_CNN

Projeto em notebook para treino de uma rede CNN voltada para detecção de pneumonia em imagens de raio-x, com apoio de um front-end simples em TensorFlow.js para uso fora do Colab.

## Execucao local

1. Crie/ative o ambiente virtual do projeto.
2. Instale as dependencias:

```bash
pip install -r requirements.txt
```

3. Abra o notebook [CDPRO_CNN.ipynb](CDPRO_CNN.ipynb) e execute as celulas na ordem para treinar e exportar o modelo.
4. Para testar a interface web, sirva a pasta na raiz do projeto:

```bash
python -m http.server 8000
```

5. Acesse `http://localhost:8000` no navegador.

## Fluxo TensorFlow.js

1. A pasta `pneumonia_detection_tfjs_model/` precisa ficar na raiz do projeto, ao lado de `index.html` e `script.js`.
2. Se voce regenerar os artefatos web no notebook, mantenha os arquivos produzidos no mesmo nivel do README.

## Arquivos principais

- [CDPRO_CNN.ipynb](CDPRO_CNN.ipynb): notebook principal do projeto.
- [requirements.txt](requirements.txt): dependencias do ambiente local.
- [index.html](index.html): interface web para inferencia no navegador.
- [script.js](script.js): logica de carregamento do modelo e predicao.

## Observacoes

- O fluxo web foi separado do notebook para funcionar fora do Colab.
- O modelo TensorFlow.js deve ficar na pasta `pneumonia_detection_tfjs_model/` na raiz do projeto.
