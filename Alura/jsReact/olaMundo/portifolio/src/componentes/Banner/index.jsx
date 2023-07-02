import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
import styles from './Banner.module.css'


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>My name is Diogo</h1>
        <p className={styles.paragrafo}>With my experience in web programming and ability to learn new technologies, I come from the field of telecommunications with the ability to lead and manage teams and projects efficiently. Currently, I'm specializing in the Front-End area, with advanced knowledge in JavaScript, HTML, CSS, SASS, Webpack and delving into modern frameworks such as React, Angular and VueJS.</p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="circulo" aria-hidden={true} />
        <img className={styles.minhaFoto} src={minhaFoto} alt='foto de perfil'/>
      </div>
    </div>
  )
}
