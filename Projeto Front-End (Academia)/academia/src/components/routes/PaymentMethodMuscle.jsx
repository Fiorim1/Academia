import { useState } from "react"
import Header from "../../components/Header"
import "../../styles/PaymentMethoMuscle.css"
import Muscle from "../../assets/muscle.png"
import Footer from "../Footer"
import { useNavigate } from "react-router-dom"

function PaymentMethodMuscle() {


    // Set
    const [namePay, setName] = useState()
    const [sexo, setSexo] = useState()
    const [idade, setIdade] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

   
    let navigate = useNavigate();
    
    function handleClick() {
        navigate("/card");
    }

    function PixMuscle() {
        navigate("/pixmuscle");
    }

    function BoletMuscl() {
        navigate("/boletmuscle")
    }

    return (
        <div>
            <Header />
            <div className="title">
                <h1>Assinar Plano De Musculação</h1>
            </div>
            <div className="totalMuscle">
                <form>
                    <h2>Cadastro - Compra</h2>
                    <div className="inputs">
                        <input type="text" placeholder="Digite Seu Nome Completo" onChange={(event) => setName(event.target.value)} />
                        <div className="sexo">
                            <div className="masc">
                                <h4>Masculino</h4>
                                <input type="radio" value="Masculino" checked={sexo === 'Masculino'} onChange={(event) => setSexo(event.target.value)} />
                            </div>
                            <div className="femi">
                                <h4>Feminino  </h4>
                                <input type="radio" value="Feminino" checked={sexo === 'Feminino'} onChange={(event) => setSexo(event.target.value)} />
                            </div>
                            <input type="email" placeholder="Digite Seu Email" onChange={(event) => setEmail(event.target.value)} />
                            <input type="number" placeholder="Digite Sua Idade" onChange={(event) => setIdade(event.target.value)} />
                        </div>

                    </div>
                </form>
                <div className="img">
                    <img src={Muscle} alt="" />
                    <h3>Meio De Pagamento</h3>
                    <div className="box">
                        <div className="pix">
                            <button type="button" onClick={PixMuscle}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#37c6d0" d="M19.262,44.037l-8.04-8.04L11,35l-1.777-1.003l-5.26-5.26c-2.617-2.617-2.617-6.859,0-9.475	l5.26-5.26L11,13l0.223-0.997l8.04-8.04c2.617-2.617,6.859-2.617,9.475,0l8.04,8.04L37,13l1.777,1.003l5.26,5.26	c2.617,2.617,2.617,6.859,0,9.475l-5.26,5.26L37,35l-0.223,0.997l-8.04,8.04C26.121,46.653,21.879,46.653,19.262,44.037z"></path><path d="M35.79,11.01c-1.76,0.07-3.4,0.79-4.63,2.04l-6.81,6.77c-0.09,0.1-0.22,0.15-0.35,0.15	s-0.25-0.05-0.35-0.15l-6.8-6.76c-1.24-1.26-2.88-1.98-4.64-2.05L8.22,15h3.68c0.8,0,1.55,0.31,2.12,0.88l6.8,6.78	c0.85,0.84,1.98,1.31,3.18,1.31s2.33-0.47,3.18-1.31l6.79-6.78C34.55,15.31,35.3,15,36.1,15h3.68L35.79,11.01z M36.1,33	c-0.8,0-1.55-0.31-2.12-0.88l-6.8-6.78c-0.85-0.84-1.98-1.31-3.18-1.31s-2.33,0.47-3.18,1.31l-6.79,6.78	C13.45,32.69,12.7,33,11.9,33H8.22l3.99,3.99c1.76-0.07,3.4-0.79,4.63-2.04l6.81-6.77c0.09-0.1,0.22-0.15,0.35-0.15	s0.25,0.05,0.35,0.15l6.8,6.76c1.24,1.26,2.88,1.98,4.64,2.05L39.78,33H36.1z" opacity=".05"></path><path d="M36.28,11.5H36.1c-1.74,0-3.38,0.68-4.59,1.91l-6.8,6.77c-0.19,0.19-0.45,0.29-0.71,0.29	s-0.52-0.1-0.71-0.29l-6.79-6.77c-1.22-1.23-2.86-1.91-4.6-1.91h-0.18l-3,3h3.18c0.93,0,1.81,0.36,2.48,1.02l6.8,6.78	c0.75,0.76,1.75,1.17,2.82,1.17s2.07-0.41,2.82-1.17l6.8-6.77c0.67-0.67,1.55-1.03,2.48-1.03h3.18L36.28,11.5z M36.1,33.5	c-0.93,0-1.81-0.36-2.48-1.02l-6.8-6.78c-0.75-0.76-1.75-1.17-2.82-1.17s-2.07,0.41-2.82,1.17l-6.8,6.77	c-0.67,0.67-1.55,1.03-2.48,1.03H8.72l3,3h0.18c1.74,0,3.38-0.68,4.59-1.91l6.8-6.77c0.19-0.19,0.45-0.29,0.71-0.29	s0.52,0.1,0.71,0.29l6.79,6.77c1.22,1.23,2.86,1.91,4.6,1.91h0.18l3-3H36.1z" opacity=".07"></path><path fill="#fff" d="M38.78,14H36.1c-1.07,0-2.07,0.42-2.83,1.17l-6.8,6.78c-0.68,0.68-1.58,1.02-2.47,1.02	s-1.79-0.34-2.47-1.02l-6.8-6.78C13.97,14.42,12.97,14,11.9,14H9.22l2-2h0.68c1.6,0,3.11,0.62,4.24,1.76l6.8,6.77	c0.59,0.59,1.53,0.59,2.12,0l6.8-6.77C32.99,12.62,34.5,12,36.1,12h0.68L38.78,14z M36.1,34c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78	c-1.36-1.36-3.58-1.36-4.94,0l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l2,2h0.68c1.6,0,3.11-0.62,4.24-1.76l6.8-6.77	c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36h0.68l2-2H36.1z"></path>
                                </svg>
                                <h4>PIX</h4>
                            </button>
                        </div>

                        <div className="credit">
                            <button type="button" onClick={handleClick}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 3c.53 0 1.039.211 1.414.586s.586.884.586 1.414v14c0 .53-.211 1.039-.586 1.414s-.884.586-1.414.586h-20c-.53 0-1.039-.211-1.414-.586s-.586-.884-.586-1.414v-14c0-.53.211-1.039.586-1.414s.884-.586 1.414-.586h20zm1 8h-22v8c0 .552.448 1 1 1h20c.552 0 1-.448 1-1v-8zm-15 5v1h-5v-1h5zm13-2v1h-3v-1h3zm-10 0v1h-8v-1h8zm-10-6v2h22v-2h-22zm22-1v-2c0-.552-.448-1-1-1h-20c-.552 0-1 .448-1 1v2h22z" /></svg>
                                <h4>CARTÃO DE CRÉDITO</h4>
                            </button>
                        </div>

                        <div className="bill">
                            <button type="button" onClick={BoletMuscl}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" /></svg>
                                <h4>BOLETO</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PaymentMethodMuscle