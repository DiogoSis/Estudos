import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
  return(
    <header className={styles.cabecalho} >
      <img src ="/logo.png" alt="Logo do Space" />
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
        <img src="/search.png" alt="icone da lupa" />
      </div>
    </header>
  )
}