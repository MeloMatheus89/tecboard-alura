import "./tema.estilos.css";

export function Tema({ tema }) {
  return <h3 className="tema">{tema.nome}</h3>;
}
