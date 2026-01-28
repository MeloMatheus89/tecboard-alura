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

## Ações do formulário

Antes do React 19 existia um método de enviar os dados para serem processados em outro lugar.

**Informações importantes**

A tag `<form>` entrega um objeto JS pronto chamado formData. Podemos usar ele para ganhar tempo.

Para buscar as informações do formData usaremos o `formData.get()`

A sintaxe geral será `formData.get('name')` onde name é o name do campo em questão. Exemplo usado nesse repositório.

```
const evento = {
      capa: formData.get("capa"),
      tema: temas.find((item) => item.id == formData.get("temaEvento")),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    }
```

## Estados do componente

O estado é uma forma de representar informações que podem mudar ao longo do tempo dentro de um componente. O nosso cenário aqui, temos o array de eventos. Ele poderá (e deverá), mudar conforme clicamos e preenchemos o formulário.

Ao mudar a quantiade de elementos dentro de eventos, precisamos avisar ao REACT que ele deve atualizar a interface no que tange aquele array de eventos. De acordo com o Gemini, o React tem o comportamento de um estagiário bem preguiçoso, igual aos que eu já tive na Jabil. É necessário "cutucar" o infeliz para ele voltar a renderizar aquele trecho.

Para criar um estado, usamos um **Hook**.

### useState

Como se usa o useState??

Primeira coisa, a gente garante que ele vai ser chamado no react ao importar ele. `import { useState } from "react";` . Cola isso no topo do documento ou deixe a IDE completar para ganhar tempo. Esse ponto recebe o item de atenção da categoria **IPC**.

Detro do App.jsx, ou de onde ele for usado, você chama o useState com uma sintaxe similar à abaixo.

`const [estadoAtual, setEstadoAtual] = useState([valor inicial]);`

Como a mágica acontece: Sempre que você quiser mudar o dado, você chama a função: `setEstadoAtual(novoValor)`. O React, então, percebe a mudança, joga o novoValor para dentro do estadoAtual e atualiza a tela para você. "

# Trecho retirado da alura sobre como era feito antes do React19:

O que muda com o React 19?
Antes do React 19, você não podia passar uma função direto no action de um formulário. Isso era coisa do HTML tradicional. Mas com o novo compilador, o React permite que a gente use funções diretamente no action — e essa função vai receber os dados do formulário automaticamente, via `formData.get()`.

Isso significa menos código, menos estado local e menos complicação.

Mas e se o projeto for em React 18 (ou anterior)?
Aí o cenário muda.

Você vai encontrar formulários bem diferentes. Em vez de usar formData, os dados dos inputs são controlados pelo estado da aplicação. A gente chama isso de input controlado.

O que é um input controlado?
Antes de tudo, vale entender dois eventos importantes em formulários no React:

`onSubmit`: é o que acontece quando o formulário é enviado. Normalmente a gente intercepta esse evento pra impedir que a página recarregue e processa os dados manualmente.
`onChange`: é o que acontece sempre que o usuário digita ou muda algo em um campo. É esse evento que a gente usa pra atualizar o estado com o valor do input.
É quando o valor do campo (input, textarea, etc.) está sempre ligado ao estado do componente. O usuário digita, e o useState registra o que tá sendo digitado. O valor do input é controlado 100% pelo React.

Exemplo:

```
  function FormularioDeBusca() {
    const [consulta, setConsulta] = useState("");

  function aoSubmeter(evento) {
  evento.preventDefault();
  alert(`Você pesquisou por: ${consulta}`);
}

  return (
    <form onSubmit={aoSubmeter}>
    <input
      value={consulta}
      onChange={(e) => setConsulta(e.target.value)}
    />
    <button type="submit">Buscar</button>
  </form>
);
}
```

### Por que isso ainda é importante?

Porque a maior parte das aplicações por aí ainda usam versões anteriores do React. E mesmo que você esteja começando já no React 19, entender como a gente fazia antes é importante pra:

### Manter ou evoluir projetos legados

Conseguir ler código de outras pessoas
Entender melhor como o React funciona por baixo dos panos
E quando o formulário fica grande?
Gerenciar muitos useState pode ficar bagunçado. É por isso que surgiram bibliotecas como:

1. React Hook Form (RHF): leve, rápido, funciona bem com validações
1. Formik: muito usado, ótimo pra formulários mais estruturados

Essas libs ajudam a lidar com formulários longos, regras de validação, erro, envio, loading... Tudo isso com menos código e mais organização.

### Conclusão

Se você tá usando React 19, aproveita esse novo jeito com form action={minhaFuncao}. É simples, limpo e moderno.

Mas também é importante entender como lidávamos com formulários antes: com useState, inputs controlados, onChange, onSubmit... E como as bibliotecas de formulários vieram pra ajudar.

Aprender essas duas abordagens — a nova e a clássica — te deixa mais preparado pra lidar com qualquer projeto React por aí.

Um passo de cada vez. Tá tudo se encaixando!

```

```

# Fim do capítulo 4
