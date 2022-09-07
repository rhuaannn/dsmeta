import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <>
            <header>
                <div className="container-header">

                <img src={logo} alt="logo" />
                    <h1>MetaVendas</h1>
                    <p>
                        Desenvolvido por Rhuan Marques
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
