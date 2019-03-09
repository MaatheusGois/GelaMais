# ToDoAcademy


#### API

- Login `url.com/register/`

**Envio:**

```
{ 
    'nome' : <nome>,
    'email' : <emauk>,
    'email' : <senha>,
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
⁾)
```
