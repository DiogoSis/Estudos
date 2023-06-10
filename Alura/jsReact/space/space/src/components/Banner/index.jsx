/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./Banner.module.scss"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa do espaço</h1>
      <img src="/banner.png" alt="A imagem da terra vista do espaço" />
    </div>
  )
}
