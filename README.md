# GelaMais

**Gela Mais** é uma solução para desenvolver uma forma eficiente de se controlar produtos que estão armazenados na geladeira.


### Dependêncies

- NodeJS:
    - Express
    - npm

### Instalando

Para rodar o servidor precisamos entrar na pasta que contém o arquivo `package.json`. 
1. Instalando as dependências do NodeJS:

```shell
$ npm install
```

2. Rodando o Servidor:

```shell
$ npm start
```

#### API

- Registro `suaUrl.com/api/`


**Envio:**

```
{ 
    'nome' : <nome>,
    'email' : <email>,
    'senha' : <senha>
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


