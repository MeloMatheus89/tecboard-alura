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
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}></Tema>
            {eventos.map(function (item, index) {
              return <CardEventos evento={item} key={index} />;
            })}
          </section>
        );
      })}
    </>
  );
}

export default App;
