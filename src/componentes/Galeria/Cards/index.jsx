import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Cards({fotos, styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {fotos.map(foto => {
                return (
                    <li key={foto.id} className={styles.galeria__card}>
                        <img src={foto.imagem} alt={foto.titulo} className={styles.galeria__imagem} />
                        <p className={styles.galeria__descricao}>{foto.titulo}</p>

                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={favorito} alt="ícone de coração para curtir" />
                                <img src={open} alt="ícone de expandir imagem" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
