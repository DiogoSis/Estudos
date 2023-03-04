import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from "../../img/livro2.png"

const ContainerLancamentos = styled.section`
    background-color: aliceblue;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const ConteinerLancamentosNovos = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(

        <ContainerLancamentos>
             <Titulo corTitulo="#000" >
                ÚLTIMOS LANÇAMENTOS
             </Titulo>
             <ConteinerLancamentosNovos>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ))}
             </ConteinerLancamentosNovos>
             <CardRecomenda
                titulo = 'Talvez tenha interesse'
                subtitulo = 'Angula 11'
                descricao = 'Construindo uma Aplicação'
                img = {imagemLivro}
             />
        </ContainerLancamentos>
       

    )
}

export default UltimosLancamentos