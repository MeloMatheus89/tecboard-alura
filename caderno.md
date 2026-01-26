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

Também podemos escrever alguns _props_ usando a sintaxe abaixo no componente

```
function CelebrityCard(props) {
  // Código a ser completado
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>
    </div>
  );
}
```

É interessante nesse caso declarar o que são os atributos dos props para que o React interprete com maior facilidad e principalmente antes do `return ([código omitido])`.
` const {name, age, profession} = props`

Ao fazer isso ele cria um objeto com as características

```
    props = {
        name: ;
        age: ;
        profession: ;
    }
```

E aguarda a entrada dos dados na hora de chamar o componente lá no App.jsx.

# Virtual DOM

O React.js em prática ele só renderiza o que foi alterado após calcular as diferenças presentes nos componentes. Vide imagem:

<!-- Colocar a imagem do exemplo do Vídeo do cap 3 video 2 -->

![Imagem](./caderno-imagens/image.png)

Na imagem acima representa o Virtual DOM na parte de cima e o que foi renderizado pelo navegador na parte de baixo.

O Virtual DOM mantem uma representação dos ocorridos em memória e quando muda ele faz um cálculo do que será alterado e aí sim ele vai lá e envia para o navegador para apresentar as mudanças na tela.

## Seção relembrando JavaScript

```
  Array.map(function(itemDoArray){
    [código omtido]
  })
```

O método map corre todo o Array e ele consegue entregar um retorno dentro da sua função. Pense que ele pode chamar uma outra função (recursividade?) para trabalhar essa etapa dentro do código do React e por consequência renderizar um componente na tela.

A vantagem de usar `.map()` é que ele obrigatoriamente retorna um resultado do processo que ele passou. Ou seja, quando precisamos tratar um array alguma informação nele percorrida.

## Limitações do JSX

### 1 - Não podemos socar toda a lógica ali dentro (Lá ele!!)

Vamos imaginar que o elemento JSX precisa fazer uma condição um pouco mais complexa.

```
function calculoComplexo(parametro1, parametro2) {
  [código omitido]
  return finalDoCalculoComplexo
}
```

Posso simplesmente socar isso tudo de JavaScript ali dentro do JSX e gritar pronto?! **Não**.

Alguns cuidados precisam ser tomados. Pense que o componente, a parte que é "HTML" em aspas colossais, ele precisa ser renderizado rapidamente. Então algumas limitações são necessárias para a fluidez do conteúdo.

1. O que posso fazer?
   Podemos escrever variáveis:
   `return <h3>{variavelQualquer}</h3>`
   Podemos usar operadores lógicos (ternários)
   `return <h3>{estaLogado ? "Sair": "Entrar"}</h3>`
   Podemos usar operadores matemáticos
   `return <p>{3+3}</p>`
   Podemos puxar propriedades de objetos
   `return <p>{user.nome}<p>`
   Podemos chamar funções e seus retornos
   `return <p>{formatarData(data)}</p>`

Então onde colocamos o código JavaScript?? **Antes do `return ([elementos para serem renderizados])`.**
Ao colocar ali. O navegador irá fazer a lógica necessária para executar essa tarefa, renderizar apenas o que mudou(se mudou) e entregar a resposta de forma dinâmica.
