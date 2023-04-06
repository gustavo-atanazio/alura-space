import React from 'react'
import styles from './Rodape.module.scss'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div>
            <a href="#"><img src={facebook} alt="Logo do Facebook" /></a>
            <a href="#"><img src={twitter} alt="Logo do Twitter" /></a>
            <a href="#"><img src={instagram} alt="Logo do Instagram" /></a>
        </div>
        <span>Desenvolvido por Alura</span>
    </footer>
  )
}
