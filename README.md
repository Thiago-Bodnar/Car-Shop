
# Car Shop

Esse é um projeto que desenvolvi na seção 12 do módulo de back-end do curso da Trybe. Uma API  OO escrita em Node.js e Typescript. Nela é possível realizar um CRUD de carros e motos em um banco MongoDB.  

## Documentação da API

#### Retorna todos os carros

```http
  GET /cars
```

#### Retorna um carro

```http
  GET /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você quer |


#### Cria um carro
```http
  POST /cars
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `model, year, color, status?, buyValue, doorsQty,seatsQty`      | `object` | **Obrigatório**. Características do carro que você quer adicionar |

#### Edita um carro
```http
  PUT /cars/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você quer editar |

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `model, year, color, status?, buyValue, doorsQty,seatsQty`      | `object` | **Obrigatório**. Características do carro que você quer editar |


#### Deleta um carro

```http
  DELETE /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você quer deletar |


#### Retorna todas as motos

```http
  GET /motorcycles
```

#### Retorna uma moto

```http
  GET /motorcycles/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da moto que você quer |


#### Cria uma moto
```http
  POST /motorcycles
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `model, year, color, status?, buyValue, category, engineCapacity`      | `object` | **Obrigatório**. Características da moto que você quer adicionar |

#### Edita uma moto
```http
  PUT /motorcycles/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da moto que você quer editar |

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `model, year, color, status?, buyValue, category, engineCapacity`      | `object` | **Obrigatório**. Características da moto que você quer editar |


#### Deleta uma moto

```http
  DELETE /motorcycles/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da moto que você quer deletar |

## Autor

- [Thiago-Bodnar](https://github.com/Thiago-Bodnar)


## Como iniciar o projeto


  1. Clone o repositório

  - Use o comando: `git clone git@github.com:Thiago-Bodnar/Car-Shop.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd Car-Shop`

  2. Instale as dependências

  - `npm install`


##  Rodando o projeto com Docker

  > Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it car_shop bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com os testes.


  ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa utilizar a aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.


  ## Rodando Localmente

  > Instale as dependências  com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com os testes.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  


## Aprendizados

Meu maior aprendizado com esse projeto foi implementar a arquitetura MSC, utilizando Orientação à objetos com um banco de dados MongoDB, utilizando o Mongoose. Na implementação, busquei seguir os padrões SOLID, o que se tornou para mim o maior desafio do projeto. No Car Shop, desenvolvi uma boa compreensão sobre abstração de classes e reusabilidade de métodos, o que certamente me ajudará em projetos futuros.


## Stack utilizada


**Back-end:** Node, Express, Typescript, MongoDB, Mongoose, Zod, Mocha, Chai, Sinon


## Rodando os testes

Para rodar os testes, rode o seguinte comando no terminal

```bash
  npm test
```

