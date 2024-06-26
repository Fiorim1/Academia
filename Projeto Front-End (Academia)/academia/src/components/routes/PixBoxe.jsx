import Header from "../Header"
import Footer from "../Footer"
import Pix from "../../assets/pix.png"
import "../../styles/PixBoxe.css"
import { useNavigate } from "react-router-dom"

const PixBoxe = () => {
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
            <div className="pixTotal">
            <div>
                <h1>Pix</h1>
            </div>
            <div className="pixImg">
                <img src={Pix} alt="" />
            </div>
            <div>
                <h3>Você possui apenas 24 horas ara realizar o pagamento PIX!</h3>
            </div>
            <div className="shopOk">
            <button type="button" onClick={pageMuscle}>Concluir Compra</button>
            </div>
            <div className="buttonExit">
            <button type="button" onClick={stopShop}>Cancelar Comprar</button>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PixBoxe