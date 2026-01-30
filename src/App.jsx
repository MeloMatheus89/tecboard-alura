import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner/index.jsx";
import { CardEventos } from "./componentes/CardEventos/index.jsx";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento/index.jsx";
import { Tema } from "./componentes/Tema/index.jsx";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "backend",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  // const eventos = [
  //   {
  //     capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
  //     tema: temas[0],
  //     data: new Date(),
  //     titulo: "Mulheres no Front",
  //   },
  // ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    // eventos.push(evento);
    // console.log("eventos atualizados => ", eventos);
    setEventos([...eventos, evento]);
  }

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" />
        </header>
        <Banner />
        <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      </main>
      <section className="container">
        {temas.map(function (tema) {
          if (
            // Se existir algum evento então... (precisamos de uma confirmação de verdadeiro ou falso nesse método)
            !eventos.some(function (evento) {
              // Retornamos verdadeiro ou falso se o tema do evento bate com algum tema da lista (estamos padronizando o ID dos dois lados, por isso é possível)
              return evento.tema.id == tema.id;
            })
          ) {
            return null;
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos
                  .filter(function (evento) {
                    return evento.tema.id == tema.id;
                  })
                  .map(function (evento, index) {
                    return <CardEventos evento={evento} key={index} />;
                  })}
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default App;
