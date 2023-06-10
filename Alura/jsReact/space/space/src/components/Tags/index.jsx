import React from 'react'
import styles from './Tags.module.scss'

export default function Tags() {
  const tagsNomes = [
    {id:1, name: 'Estrelas'},
    {id:1, name: 'Galáxias'},
    {id:1, name: 'Lua'},
    {id:1, name: 'Planetas'}
  ]

  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tagsNomes.map(item =>(
        <li  key={item.id}>{item.name}</li>  
        ))}
      </ul>
    </div>
  )
}
