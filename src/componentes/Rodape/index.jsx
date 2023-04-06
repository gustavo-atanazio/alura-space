import React from 'react'
import styles from './Rodape.module.scss'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div>
            <a href="https://facebook.com"><img src={facebook} alt="Logo do Facebook" /></a>
            <a href="https://twitter.com"><img src={twitter} alt="Logo do Twitter" /></a>
            <a href="https://instagram.com"><img src={instagram} alt="Logo do Instagram" /></a>
        </div>
        <span>Desenvolvido por Alura</span>
    </footer>
  )
}
