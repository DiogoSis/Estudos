import style from './sobreMim.module.css'
import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/minha_foto.png'


export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={style.subtitulo}>
        Olá, eu sou Diogo!
      </h3>
      
      <img
        src={fotoSobreMim}
        alt="Minha foto"
        className={style.fotoSobreMim}
      />

      <p className={style.paragrafo}>Com experiência no campo de telecomunicações, onde adquiri habilidades em liderança e gerenciamento de equipes e projetos, direcionei minha carreira para o desenvolvimento web. Atualmente, estou especializando-me na área de Front-End, utilizando tecnologias como JavaScript, TypeScript, HTML, CSS, SASS e frameworks modernos como React, Angular e VueJS.</p>  
      <p className={style.paragrafo}>Além dos projetos, também possuo conhecimentos em Python, Node.js, AWS e SQL, o que me permite desenvolver soluções completas para diferentes necessidades. Além disso, meu conhecimento em metodologias ágeis, como SCRUM e Kanban, contribui para a entrega eficiente dos projetos.</p>
      <p className={style.paragrafo}>Convido você a explorar meu portfólio e conhecer mais sobre meu trabalho. Estou sempre em busca de desafios estimulantes e oportunidades para colaborar em projetos inovadores. Fique à vontade para entrar em contato comigo caso tenha interesse em discutir possíveis parcerias ou projetos.</p>
      <p className={style.paragrafo}>Agradeço por visitar meu site e por dedicar seu tempo para conhecer um pouco mais sobre mim e meus projetos. Espero que você aprecie o que compartilhei aqui e que possamos trabalhar juntos no futuro!</p>
    </PostModelo>
  )
}

