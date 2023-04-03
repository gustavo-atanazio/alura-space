import logo from './logo.png'
import search from './search.png'

function Cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo do Alura Space"/>
            <div>
                <input type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Icone de lupa"/>
            </div>
        </header>
    )
}

export default Cabecalho;
