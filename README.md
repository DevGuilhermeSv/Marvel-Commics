## Requisitos 
- Nodejs
- AngularCLI
- NPM
## Executando Aplicação

Execute no terminal os comandos `npm install` para instalar as dependencias  e  `ng serve -o` para executar o servidor. A aplicação deve abrir no navegador no endereço `http://localhost:4200/`.

## Aplicação e Funcionamento

### Estilização  
- Para a Estilização da aplicação foi utilizado recursos do Bootstrap 4.5 e Instruções proprias de css no arquivos src/styles.css (Pagina principal) e src/assets/styleMaps.css (Estilização do google maps);

### Components e Services

- A projeto deve carregar o componente *appComponent* e logo em seguida o componente principal *CommicsComponent*. Este contem a lista que é atualizada de acordo com a pesquisa do usuario e o modal com detalhes do quadrinho. O Componente  *loadingComponent*  serve para apresentar uma animação ao carregar a busca.
- As configurações de conexão com a API dos quadrinhos é feita diretamente no arquivo *configService*

- Como resultado a aplicação deve ser capaz de oferecer o usuario as funcionalidades de Escolher seu quadrinho, Filtrar pelo nome, Navegar entre as paginas e enviar, Ler os Detalhes e enviar o quadrinho escolhido para o seu endereço no Mapa! 
