# Lab Api

<p> O contexto dessa aplicação é uma API para a manutenão de laborátórios e exames. </p>

<div id = 'visao'>

<br/>

### Visão geral

<br/>

O projeto foi desenvolvido utilizando o [Typescript](https://www.typescriptlang.org/) como linguagem de programação e o [NodeJs](https://nodejs.org/en/). O framework utilizado foi o [ExpressJs](https://expressjs.com/), o ORM (_Object Relational Mapper_) utilizado foi o [Prisma](https://www.prisma.io/) e o banco de dados foi o PostegreSQL que está num container do [Docker](https://www.docker.com/).

</div>

<br>

<div id="exclocal">

### Executando o projeto localmente

<br>

Primeiramente deve se ter instalado na máquina o [NodeJs](https://nodejs.org/en/), preferencialmente o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) e o [Docker](https://www.docker.com/).
Segundo passo é executar os comandos de instalação de dependencias:

```console
user@user:~$ yarn
```

ou

```console
user@user:~$ npm install
```

Esse comando irá gerar a pasta node_modules no projeto e é responsável por instalar essas dependências que se encontranto no aqeuivo package.json:

```javascript
"dependencies": {
    "@prisma/client": "^3.8.1",
    "@types/swagger-ui-express": "^4.1.3",
    "cors": "^2.8.5",
    "dotenv": "^14.2.0",
    "express": "^4.17.2",
    "express-async-errors": "^3.1.1",
    "swagger-ui-express": "^4.3.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "prisma": "^3.8.1",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.5.5"
  }
```

Proximo passo é pegar o aqruivo .env.exemple e transformar ele num .env; após isso substituir as variáveis de DATABASE_URL pelas variáveis de conexão com o banco de dados encontradas no arquivo docker-compose.yml. Após isso execute a função que executa as migrações do Prisma:

```console
user@user:~$ yarn migrate
```

ou

```console
user@user:~$ npm run migrate
```

Isso criará todas as tabela no banco de dados.<br><br>
Após execute o comando para executar a API:

```console
user@user:~$ yarn dev
```

ou

```console
user@user:~$ npm run dev
```

A aplicação estará sendo executada na porta 7000 do seu localhost.

</div>
<br>

<div id='deploy'>

### Deploy

<br>

A aplicação está hospedada no serviço de cloud [Heroku](https://dashboard.heroku.com/); acessado o endpoint https://labapinode.herokuapp.com/ terá um _Hello world_ que mostra que aplicação está funcionando.

<br>

</div>

<div id = 'req'>

### Requisitos da aplicação

<br>

A aplicação possui em caráter de 3 entidades, sendo elas: Exame, Laboratório e uma entidade que representa a associação de Exames e Laboratório.

<br>

Sobre Exame, o usuário pode: criar exames, listrar exames ativos, deletar exame ativo, atualizar um exame, e buscar um exame pelo nome e assim obter além dos dados desse exame a lista de laborátorios associados a ele, já que um exame pode estar associado a vários laboratórios e os laboratórios possuem vários exames.

<br>

Sobre Laboratório, o usuário pode: criar laboratório, listrar laboratórios ativos, deletar laboratório ativo e atualizar um laboratório.

<br>

A imagem abaixo representa por meio de um diagrama de classes UML as tabelas no banco de dados e os relacionamentos entre elas.

<br>

<div>
