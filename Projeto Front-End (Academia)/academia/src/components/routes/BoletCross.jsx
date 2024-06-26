import Header from "../Header"
import Footer from "../Footer"
import "../../styles/BoletCross.css"
import Bolet from "../../assets/bolet.png"
import { useNavigate } from "react-router-dom"

const BoletCross = () => {
    function boletSucess() {
        alert("Boleto Enviado Pelo Email")
    }
    const navigate = useNavigate()
    function stopShop() {
        alert("COMPRA CANCELADA :(")
        navigate("/")
    }
    function pageMuscle() {
        alert("Compra Concluída!!")
        navigate("/login")
    }
    return (
        <div>
            <Header />
            <div className="boletCross">
                <div className="titleBoletCross">
                    <h1>Boleto Musculação</h1>
                </div>
                <div className="boletImg">
                    <img src={Bolet} alt="" />
                    <div className="barBolet">
                        <button type="button" onClick={boletSucess}><h3>Baixar Boleto
                            </h3></button>
                    </div>
                </div>
                        <div className="shopOk">
                            <button type="button" onClick={pageMuscle}>Concluir Compra</button>
                        </div>
                        <div className="buttonExit">
                            <button type="button" onClick={stopShop}>Cancelar Comprar</button>
                        </div>
            </div>
            <Footer />
        </div>
    )
}

export default BoletCross