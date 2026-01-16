import "./App.css";

function TituloFormulario(tituloFormulario) {
  return <h2>{tituloFormulario.children}</h2>;
}

function CampoDeFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function CampoDeEntrada(props) {
  return <input {...props}></input>;
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para cirar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?;</Label>

        <label htmlFor="nome">Qual o nome do evento?</label>
        <CampoDeEntrada type="text " id="nome" placeholder="Summer dev hits"></CampoDeEntrada>
      </CampoDeFormulario>
    </form>
  );
}

function App() {
  return (
    <>
      <main>
        <header>
          <img src="/logo.png" />
        </header>
        <section>
          <img src="/banner.png" />
        </section>
        <FormularioDeEvento />
      </main>
    </>
  );
}

export default App;
