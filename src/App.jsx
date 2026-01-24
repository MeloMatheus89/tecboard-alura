import "./App.css";
import { Banner } from "./componentes/Banner/index.jsx";
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

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" />
        </header>
        <Banner />
        <FormularioDeEvento />
      </main>
      <section>
        <Tema tema={temas[0]}></Tema>
      </section>
    </>
  );
}

export default App;
