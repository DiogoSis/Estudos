// import "./style.css";
import Perfil from "../../img/perfil.svg";
import Sacola from "../../img/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icones = [Perfil, Sacola];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icon) => (
        <Icone>
          <img src={icon} alt="icone de usuario"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
