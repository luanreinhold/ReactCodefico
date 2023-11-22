import './header.css'

export default function cabecalho () {
  
    function aviso() {
        alert("Botão Acionado!")
    }

    function trocaCor() {
        let h = document.querySelector('header')

        if(h.style.backgroundColor == 'red') {
            h.style.backgroundColor = 'blue'
        }
        else {
            h.style.backgroundColor = 'red'
        }
        
    }

    return(
        <header>
            <button onClick={aviso}>Aperta o Alert</button>
            <button onClick={trocaCor}>Trocar cor</button>
        </header>
    )
}
