import style from "./rodape.module.css"
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"

export default function Rodape() {
  return (
    <footer className={style.rodape}>
      <MarcaRegistrada />

      Desenvolvido por Diogo
    </footer>
  )
}
