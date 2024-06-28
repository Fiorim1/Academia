import { useState } from "react"
import logoMuscle from "../../assets/Logo.png"
import "../../styles/Login.css"
import Header from "../Header"
import Footer from "../Footer"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  function goToForgotPasswordLogin() {
    navigate("/forgotpassword");
  }
  function goToRegister() {
    navigate("/register");
  }
  function goChangeTraining() {
    navigate("/perfilchanges");
  }
  return (
    <div className="contentAllLogin">
      <Header />
      <div className="login">
        <div className="logo">
          <img src={logoMuscle} alt="" />
        </div>
        <div className="titlePrincipal">
          <h1>FITNESS CLUB</h1>
        </div>
        <div className="title">
          <h2>LOGIN</h2>
        </div>
        <div className="inputsLogin">
          <form>
            <input type="text" placeholder="CPF" />
            <input type="password" placeholder="SENHA" />
          </form>
          <div className="buttonFortgotPasswordLogin">
            <button type="button" onClick={goToForgotPasswordLogin}>Esqueceu a Senha?</button>
            <button type="button" onClick={goToRegister}>Caso Não Possua Conta.. Crie Aqui!</button>
          </div>
        </div>
        <div className="joinLogin">
          <button type="button" onClick={goChangeTraining}>Entrar</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login