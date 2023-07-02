import style from './botaoPrincipal.module.css'

export default function BotaoPrincipal({children, tamanho}) {
  return (
    <button className={`
      ${style.botaoPrincipal}
      ${style[tamanho]}
    `}>
      {children}
    </button> 
  )
}
