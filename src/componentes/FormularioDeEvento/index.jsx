//Estilos
import "./formulario-de-eventos.estilos.css";

//Dependências
import { TituloFormulario } from "../TituloFormulario/index.jsx";
import { CampoDeFormulario } from "../CampoDeFormulario/index.jsx";
import { CampoDeEntrada } from "../CampoDeEntrada/index.jsx";
import { Label } from "../Label/index.jsx";
import { CampoDeSelecao } from "../CampoDeSelecao/index.jsx";
import { Botao } from "../Botao/index.jsx";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada type="text " id="nome" placeholder="Summer dev hits"></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento"></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento </Label>
          <CampoDeSelecao />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
