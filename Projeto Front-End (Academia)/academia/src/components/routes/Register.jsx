import { useState } from "react"
import logoMuscle from "../../assets/Logo.png"
import "../../styles/Register.css"
import Header from "../Header"
import Footer from "../Footer"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }

  function goToLoginWithAlert() {
    alert("Conta Criada Com Sucesso!!")
    navigate("/login");
  }
  return (
    <div className="contentAllLogin">
      <Header />
      <div className="register">
        <div className="logo">
          <img src={logoMuscle} alt="" />
        </div>
        <div className="titlePrincipal">
          <h1>FITNESS CLUB</h1>
        </div>
        <div className="title">
          <h2>REGISTRE-SE</h2>
        </div>
        <div className="inputsRegister">
          <form>
            <input type="text" placeholder="NOME COMPLETO"/>
            <input type="text" placeholder="CPF" />
            <input type="password" placeholder="SENHA" />
          </form>
          <div className="buttonFortgotPasswordRegister">
            <button type="button" onClick={goToLogin}>Caso Possua Conta.. Crie Aqui!</button>
          </div>
        </div>
        <div className="joinRegister">
          <button type="button" onClick={goToLoginWithAlert}>Criar Conta</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
