//Estilos
import "./formulario-de-eventos.estilos.css";

//Dependências
import { TituloFormulario } from "../TituloFormulario/index.jsx";
import { CampoDeFormulario } from "../CampoDeFormulario/index.jsx";
import { CampoDeEntrada } from "../CampoDeEntrada/index.jsx";
import { Label } from "../Label/index.jsx";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text " id="nome" placeholder="Summer dev hits"></CampoDeEntrada>
      </CampoDeFormulario>
    </form>
  );
}
