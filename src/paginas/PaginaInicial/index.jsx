import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

function PaginaInicial() {
    return (
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço</h1>
                    <img src={banner} alt="Terra vista do espaço" />
                </div>
            </section>
        </main>
        <Rodape/>
        </>
    )
}

export default PaginaInicial;
