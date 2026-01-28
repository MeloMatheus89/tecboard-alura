import "./campo-de-selecao.estilos.css";

export function CampoDeSelecao({ itens, ...rest }) {
  return (
    <select {...rest} className="campo-de-selecao" defaultValue="">
      {/* Expandir a lista usando .map */}
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
