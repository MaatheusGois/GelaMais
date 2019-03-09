# GelaMais

**Gela Mais** é uma solução para desenvolver uma forma eficiente de se controlar produtos que estão armazenados na geladeira.


### Dependencies

- Nodejs:
    - Express
    - npm

### Installing

The server is written in Django and is  placed on `server/` folder. Follow this steps to setup the server:
Para rodar o servidor precisamos entrar na pasta que contém o arquivo `package.json`. 
1. Instalando as dependências do NodeJS:

```shell
$ npm install
```

2. Run the Server:

```shell
$ npm start
```

#### API

- Login `url.com/register/`


**Envio:**

```
{ 
    'nome' : <nome>,
    'email' : <email>,
    'email' : <senha>
}
```

**Recebe:**

Se sucesso:

```
{
     'resposta': true
}
```

Se não:

```
{
    'resposta': false
⁾)
```


- Login `url.com/login/`

**Envio:**

```
{ 
    'email' : <email>,
    'senha' : <senha>
}
```

**Recebe:**

Se sucesso:

```
{
    'nome': <user_name>,
    'email' : <user_email>,
    'senha' : <user_senha>
}
```

Se não:

```
{
    'login' : 'false'
}
```
