import React from 'react'
import styles from './Rodape.module.scss'

export default function Rodape() {
  const rodapeItens = [
    {id:1, img:'/social/facebook.svg', name: 'Facebook', url: '/'},
    {id:1, img:'/social/instagram.svg', name: 'Instagram', url: '/'},
    {id:1, img:'/social/twitter.svg', name: 'Twitter', url: '/'}
  ]
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        {rodapeItens.map(item =>(
          <>
          <a 
            key={item.id}
            href={item.url}
            target='_blank'
            rel='noreferrer'
          />
          <img 
            src={item.img} 
            alt={item.name} 
          />
          </>
        ))}
      </div>
      <p>Desenvolvido por Diogo.Dev</p>
    </footer>
  )
}
