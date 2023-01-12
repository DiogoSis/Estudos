
import './CampoTexto.css'

const CampoTexto = (props) =>{

    //let valor = ''
    //const [valor, setValor] = useState('')
    //mantem o estado dentro de uma função

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
        // setValor (evento.target.value)
        // console.log(valor)
    }

    

    return (
        <div className="campo_texto">
            <label>
                {props.label}
            </label>
            <input /*value={valor}*/ value={props.valor} onChange={aoDigitar} required= {props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto