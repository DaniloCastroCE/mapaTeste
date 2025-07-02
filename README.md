# MAPA LOCKTEC

## Índice

• Sobre

• Tecnologias

• Instalação

• Funcionalidades

• Atualizar, adiconar ou remover condominios.

• Estrutura de pasta

• Explicação do código Jasvascript

• Autor


## Sobre

Página desenvolvida exclusivamente com front-end, criada para facilitar a busca de endereços dos condomínios da Locktec. Seu objetivo é otimizar o planejamento de rotas para inspetores e técnicos, além de apoiar na definição de estratégias de segurança e em outras atividades relacionadas à gestão dos condomínios.


## Tecnologias

• HTML

• CSS

• JAVASCRIPT

• Biblioteca Open Street Map


## Instalação

Não há necessidade de instalação. Basta abrir o arquivo index.html no navegador.


## Funcionalidades

O sistema permite a busca de condomínios, retornando informações detalhadas de cadastro, como nome do condomínio, endereço completo, latitude, longitude, e até links para pesquisa no Google, entre outras informações relevantes. Além disso, o sistema oferece a possibilidade de ocultar condomínios específicos, exibindo apenas aqueles que forem desejados pelo usuário. Também há a funcionalidade de copiar o endereço de um ou mais condomínios, facilitando o compartilhamento ou uso dessas informações.


### Atualizar, adiconar ou remover condominios.

Para atualizar, adicionar ou remover condomínios, acesse o arquivo Locais.js e modifique o array locais, inserindo ou removendo os objetos conforme necessário.

*Exemplo de um condominio cadastrado*:

```javascript
{ 
    nome: "LOCKTEC", nomeSimplificado: "locktec", lat: "-3.730170", lon: "-38.480570", ativo: true, tipo: "não definido", dvr: ["não definido"], locktec: "SEDE",   
    end: { rua: 'Oliveira Viana', num: '77', bairro: "Vicente Pinzon", cidade: "Fortaleza", sigla: "CE", } 
},
```

*Observação*: 

1º - Existem algumas linhas de código comentadas, indicando onde começam os condomínios de Fortaleza, os de fora de Fortaleza e a sede.

2º - Organize os condomínios de maneira ordenada, em ordem alfabética.

3º - *! IMPORTANTE !* A variável nomeSimplificado deve ser inserida em letras minúsculas e sem acento.


## Estrutura de pasta

📁 **Pasta Raiz**  
├── 📁 **css**  
│   ├── 📄 box.css  
│   ├── 📄 loadding.css  
│   ├── 📄 mapa.css  
│   ├── 📄 padrao.css  
│   └── 📄 toast.css  
├── 📁 **js**  
│   ├── 📄 app.js  
│   ├── 📄 GeoJson.js  
│   ├── 📄 Loading.js  
│   ├── 📄 Locais.js  
│   ├── 📄 Mapa.js  
│   └── 📄 Toast.js  
└── 📄 index.html


## Explicação do código Jasvascript

### 📄 APP.JS
Este é o arquivo principal que inicia o script e contém todos os objetos e funções necessários para a execução do código.


#### CLASSES
loading: tela de espera.

mapa: o mapa e suas funcionalidades.

locais: array de condominios e suas funcionalidades.

toast: notificações de copiado.

#### VARIAVEIS
estado: Armazena o status do sistema, indicando se está em modo: "exibir", "addRemBairros", "buscarAvancada" e " "

bairros: Armazena a informação sobre a exibição da delimitação dos bairros.

dVisivel: SVG de um olho, indicando que todos os condomínios estão sendo exibidos.

dNoVisivel: SVG de um olho cortado, indicando que alguns ou todos os condomínios não estão sendo exibidos.

ultCLick: Serve para identificar o último condomínio clicado, sendo uma variável localizada acima da função onclickMarker.


#### Função 1 - teste_TranformarArrayEmCopy()
É apenas uma função que retornar um array ordenados e modificado para atualizar a lista de condominios.

#### Função 2 - init()
Inicia o condominio criar os marker's (Marcadores) e adicionado um evento no input de busca dos condominios.

#### Função 3 - func_painelFerramentas(click)
Esta função é responsável por capturar os cliques nos botões. Ela pode realizar diferentes ações, como adicionar uma lista, adicionar bairros ou ativar a busca avançada (que ainda não foi implementada). Cada clique aciona a ação correspondente de acordo com o botão pressionado.

#### Função 4 - exibir()
Constrói um campo de lista com os condomínios selecionados, com base no clique do usuário.

#### Função 5 - addExibir()
Parte dois da função exibir, que complementa a ação da função principal. A função foi dividida em duas partes devido à necessidade de não chamar a função exibir inteira, mas apenas uma de suas partes.

#### Função 6 - addRemBairros()
Adicionar ou remover uma linha de cor vermelha, delimitando a área dos bairros de Fortaleza.

#### Função 7 - buscarAvancada()
Função desativada no sistema, mas com a intenção de fornecer uma área para realizar buscas avançadas, como por exemplo: nome de rua, bairro, tipo de portaria, Locktec responsável, DVR, status (Ativo ou Desativado), entre outros. 

#### Função 8 - goLocktec()
Dar foco no endereço da Locktec ao clicar na marca d'água localizada no canto superior direito.

#### Função 9 - onclickLi(idMarker)
Ação onclick atribuída aos elementos da lista de itens de busca, que é um menu suspenso (dropbox) abaixo do campo de entrada (input) com o ID inp-buscar, localizado no canto superior esquerdo.

#### Função 10 - moveSlide(op)
Movimentação de um elemento (div) deslizante, utilizado principalmente para exibir o campo de lista de condomínios selecionados e as informações específicas de um condomínio ao ser clicado.

#### Função 11 - onclickMarker(obj)
Ação onclick que possui três respostas possíveis: a primeira é exibir as informações de um condomínio ao ser clicado; a segunda é remover o elemento deslizante mencionado na função 10; e a terceira é adicionar um condomínio à lista de condomínios selecionados.

#### Função 12 - focoLocal(idMarker)
Dar foco no condomínio no mapa, destacando sua localização.

#### Função 13 - rolagemFocusLI(idMarker)
Ação ativada quando o usuário clica mais de uma vez no mesmo condomínio que foi selecionado na lista.

#### Função 14 - deletaItemLista(index)
Deleta um condominio da lista.

#### Função 15 - onclickCopy(idMarker)
Copiar as informações de endereço de um condomínio.

#### Função 16 - copyAll()
Copiar as informações de endereço de todos os condomínios selecionados na lista.

#### Função 17 onclickBtnExibir(op)
Ação com três respostas esperadas: a primeira é exibir ou não os condomínios selecionados na lista; a segunda é limpar a lista de condomínios selecionados; e a terceira é chamar a função 16 (copyAll).


--------------------------------------------------------------------------------------------------


### 📄 GEOJSON.JS
Classe responsável exclusivamente por retornar as delimitações da área dos bairros de Fortaleza.

#### Função 1 - getFortaleza()
Retonar um Geo json


--------------------------------------------------------------------------------------------------


### 📄 LOADING.JS
Classe responsável por criar e exibir uma tela de espera.

#### VARIÁVEIS
loading: Elemento está no html


#### Função 1 - in()
Exibir a tela de espera.

#### Função 2 - out()
Não exibir a tela de espera.


--------------------------------------------------------------------------------------------------


### 📄 LOCAIS.JS
Classe que contém as informações dos condomínos.

#### VARIÁVEIS
locais: array de objetos (informações dos condomínios).


#### Função 1 - transformarArray(array)
Utilizada exclusivamente pelo desenvolvedor para organizar o array de condomínios.

#### Função 2 - getCountCond(array)
Utilizada exclusivamente pelo desenvolvedor para retornar a quantidades de condominios e etc.

#### Função 3 - nomeSimples(nome)
Remove espaços no início e no final, além de caracteres especiais, como acentos, de uma string.

#### Função 4 - getBuscarLocais(nome)
Realizar uma busca no array de condomínios utilizando o nome do condomínio.

#### Função 5 - getLocalIdMarker(idMarker)
Realizar uma busca no array de condomínios utilizando o ID Marker (_leaflet_id).

#### Função 6 - getBuscarAtributo(attr, buscar, array)
Função utilizada na busca avançada, que ainda não está sendo empregada pelo sistema. Ela permite realizar uma pesquisa com base em diversos atributos, como nome, status ativo, idMarker, locktec e tipo.


--------------------------------------------------------------------------------------------------


### 📄 MAPA.JS
Classe responsável por exibir o mapa, adicionar os marcadores (marker), exibir os bairros e outros elementos na tela.

#### VARIÁVEIS
exibir: Informar se os marcadores devem ser exibidos ou não no mapa.

markers: Array de objetos (marcadores)

listCopy: Array dos marcadores (marker) que devem ser exibidos na lista de condomínios ou copiados.

map: o mapa Leaflet.

layers: O estilo do mapa.

maxZoom: Zoom do mapa.


#### Função 1 - zoomLevel(id)
Responsável por dar zoom no mapa.

#### Função 2 - addMarker(local, callback)
Adicionar um único marcador (marker) ao mapa, juntamente com suas funcionalidades. O processo inclui a inserção das informações de idMarker e o nome simplificado do condomínio no array de condomínios.

#### Função 3 - addMultMaker(array, callback)
Adicionar vários marcadores (marker) utilizando a função 2 (addMarker()).

#### Função 4 - getMarker(id)
Busca um marcador (marker) utilizando o idMarker

#### Função 5 - addBairros(cidade)
Adicionar uma linha de cor vermelha, delimitando a área dos bairros de Fortaleza.

#### Função 6 - removeBairros(cidade)
Remover uma linha de cor vermelha, delimitando a área dos bairros de Fortaleza.

#### Função 7 - focoMarker(marker)
Foca o marcador (marker) no mapa.

#### Função 8 - verificarSeExisteMarker()
Verifica se existe marcador (marker) no mapa.

#### Função 9 - toggleMarker()
Ação que tem duas respostas esperadas; primeira é mostrar marcadores (marker); e a segunda é não mostrar os marcadores (marker).

#### Função 10 - addOneMarker()
Ação utilizada para adicionar um marcador já existente, permitindo sua visualização no mapa.


--------------------------------------------------------------------------------------------------


### 📄 TOAST.JS
Classe responsável por exibir uma caixa de texto no canto inferior direito, informando a ação de 'copiar'. Após alguns segundos, a caixa desaparece automaticamente.

#### Função 1 - showToast(message)
Chama a açao de criar a caixa de texto.


--------------------------------------------------------------------------------------------------


## Autor

### DANILO CASTRO CE

- [GitHub](https://github.com/DaniloCastroCE)

Este projeto foi desenvolvido por [Danilo Castro CE]. Sinta-se à vontade para entrar em contato ou contribuir!

