import React from 'react'
import style from './Galeria.module.scss'
import Tags from '../Tags'
import fotos from './fotos.json'

export default function Galeria() {
  return (
    <section className={style.galeria}>
      <h2>Nevegue pela galeria</h2>
      <Tags />
      <ul className={style.galeria__cards}>
        {fotos.map((foto)=>{
          return(
            <li key={foto.id} className={style.galeria__card}>
              <img 
                className={style.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
              />
              <p className={style.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src="/favorito.png" alt="Icone coração de curtir" />
                  <img src="/open.png" alt="Icone de abrir o modal" />
                </span>
              </div>
            </li>

          )
        })}
      </ul>
    </section>
  )
}
