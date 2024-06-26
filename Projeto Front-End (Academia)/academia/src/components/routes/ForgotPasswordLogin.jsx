import Header from "../Header"
import Footer from "../Footer"
import logoMuscle from "../../assets/Logo.png"
import "../../styles/ForgotPasswordLogon.css"
import { useNavigate } from "react-router-dom"


const ForgotPasswordLogin = () => {
    const navigate = useNavigate()

    function ForgotPassword() {
        alert("Senha Redefinida Com Sucesso!!")
        navigate("/login")
    }
    return (
        <div>
            <Header />
            <div className="contentForgotPassword">
                <div className="forgotPassword">
                    <div className="logoForgotPassword">
                        <img src={logoMuscle} alt="" />
                    </div>
                    <div className="titlePrincipal">
                        <h1>FITNESS CLUB</h1>
                    </div>
                    <div className="redefined">
                        <h2>Redefinir Senha</h2>
                    </div>
                    <div className="inputsForgotPassword">
                        <form>
                            <input type="password" placeholder="NOVA SENHA"/>
                            <input type="password" placeholder="REPETIR NOVA SENHA"/>
                        </form>
                    <div className="buttonForgotPassword">
                        <button type="button" onClick={ForgotPassword}>Redefinir Senha</button>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}   

export default ForgotPasswordLogin