import "./card-evento.estilos.css";

export function CardEventos({ evento }) {
  return (
    <card className="card-evento">
      <img src={evento.capa} alt="" />
      <div>
        <p className="tag">{evento.tema.nome}</p>
        <p>{evento.data.toLocaleDateString("pt-BR")}</p>
        <h4>{evento.titulo}</h4>
      </div>
    </card>
  );
}
