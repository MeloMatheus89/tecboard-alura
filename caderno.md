# Regras do JSX

1. Tudo precisa estar dentro de um único elemento
2. Feche todas as tags (Isso já me deu problemas no passado)
3. Use camelCase nos atributos
4. Cuidado com valores dinâmicos
5. JSX é opcional, mas todo mundo usa.

## Props

São os parâmetros para os nossos componentes. No exemplo abaixo uso a variável com o nome de props por questões didáticas, mas poderia ter o nome de qualquer coisa (literalmente). Então, à fim didáticos, no arquivo original terá o nome que irá para produção e aqui no exemplo mantemos o nome do resultado.

### No componente

```
function Titulo(props) {
    return(
        <h2>{props.children}</h2>
        )
}
```

### Na chamada do componente

`   <Titulo>
        Preencha para criar um evento:    
    </Titulo>`

Resultado é um título com estilização de h2 com o texto escrito entre as tags

Outra forma de escrever essa mesma sintaxe do componente é:

```
function Label({ children, htmlFor}) {
    return(
        <label htmlFor={htmlFor}>{children}</label>;
    )
}

```

O resultado será uma tag HTML label com o "for" renderizado dentro das regras do React.

### Quando o elemento precisar de vários parâmetros

```
function CampoDeEntrada(props) {
  return <input {...props}></input>;
}
```

Essa sintaxe permite que o componente seja espalhado dentro de tudo que for declarado na hora de invocar o componente para ser renderizado de acordo com a necessidade.

```
<CampoDeEntrada type="text " id="nome" placeholder="Summer dev hits"></CampoDeEntrada>
```

O Resultado é um campo de entrada com as propriedades chamadas ali. Isso é útil quando você precisa de criar os elementos da página acima, mas não precisa de absolutamente tudo (ou quando o elemento em si tiver uma quantidade de parâmetros inviável de declarar um por um o tempo todo [carece de fontes da minha parte])
