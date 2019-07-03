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


##### Obter Grupos

Method: `GET`

Url: `url.com/api/grupo`


**Resposta:**

```
{
    //Informaçoes básicas
    nome: String,
    sigla: String,
    breveDescricao: String,
    sobre: String,
    imagem: Buffer,
    ativado: Boolean,
    
    //Contato
    organizador1: String,
    contatoOrganizador1: String,
    organizador2: String,
    contatoOrganizador2: String,
    organizador3: String,
    contatoOrganizador3: String,

    //Rede sociais
    facebook: String,
    whatsapp: String,
    instagram: String,
    
    //Usuário vinculado
    usuario: 'User',
 
    //Data de criação e alteração 
    timestamps: Date
}
```


##### Obter Eventos

Method: `GET`

Url: `url.com/api/evento`


**Resposta:**

```
{
    //Informaçoes básicas
    nome: String,
    local: String,
    ativado: Boolean,
    sobre: String,
    imagem: String,
    
    //Data
    dataInicio: String,
    dataFim: String,
    horarioInicio: String,
    horarioFim: String,
    
    //Grupo vinculado
    autor: 'Grupo'
    
    //Data de criação e alteração 
    timestamps: Date
}
```


##### Obter Reuniões

Method: `GET`

Url: `url.com/api/reuniao`


**Resposta:**

```
{
    //Informaçoes básicas
    dia: String,
    horario: String,
    local: String,
    ativado: Boolean
    
    //Grupo vinculado
    autor: 'Grupo'
    
    //Data de criação e alteração 
    timestamps: Date
}
```

##### Obter Tudo

Method: `GET`

Url: `url.com/api/all`


**Resposta:**

```
{
    grupos: {
        //Recebe todas as informações descritas acima de grupos
    },
    reunioes: {
        //Recebe todas as informações descritas acima de reuniões 
    },
    eventos: {
        //Recebe todas as informações descritas acima de evento
    }
}
```


