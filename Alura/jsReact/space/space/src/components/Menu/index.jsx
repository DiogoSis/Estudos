import React from 'react'
import styles from './Menu.module.scss'


export default function Menu() {
  const menuItens = [
    {id:1, img:'/icones/home-ativo.png', name:'Início', url: '/' },
    {id:2, img:'/icones/mais-curtidas-inativo.png', name:'Mais curtidas', url: '/' },
    {id:3, img:'/icones/mais-vistas-inativo.png', name:'Mais vistas', url: '/' },
    {id:4, img:'/icones/novas-inativo.png', name:'Novas', url: '/' },
    {id:5, img:'/icones/surpreenda-me-inativo.png', name:'Surpreenda-me', url: '/' },
  ]

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {menuItens.map(item =>(
        <li className={styles.menu__item} key={item.id} >
          <img src={item.img} alt="menu" />
          <a href={item.url}>{item.name}</a>
        </li>
        ))}
      </ul>
    </nav>
  )
}
