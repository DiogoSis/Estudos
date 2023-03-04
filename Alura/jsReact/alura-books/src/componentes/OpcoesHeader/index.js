import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;
const OpcaoItens = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  min-width: 120px;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <OpcaoItens>
          <p>{texto}</p>
        </OpcaoItens>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
