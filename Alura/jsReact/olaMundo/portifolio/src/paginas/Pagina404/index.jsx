import BotaoPrincipal from 'componentes/BotaoPrincipal'
import style from './pagina404.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function Pagina404() {

  const navegar = useNavigate();

  return (
    <>
      <div className={style.conteudoContainer}>
        <span className={style.texto404}>404</span>

        <h1 className={style.titulo}>
          Ops! página não encontrada
        </h1>

        <p className={style.paragrafo}>
          Tem certeza que era isso que estava procurando?
        </p>

        <div onClick={() => navegar (-1)} className={style.botaoContainer}>
          <BotaoPrincipal tamanho="lg" >Voltar</BotaoPrincipal>
        </div>

        <img
          className={style.imagemCachorro}
          src={erro404}
          alt='Cachorro de óculos'
        />

      </div>
      <div className={style.espacoEmBranco}></div>
    </>
  )
}
