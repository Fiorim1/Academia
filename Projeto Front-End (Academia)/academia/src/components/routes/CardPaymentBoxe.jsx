import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Header from "../../components/Header"
import "../../styles/CardPayment.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CardPaymentBoxe = () => {


  const navigate = useNavigate()
  function stopShop() {
    alert("COMPRA CANCELADA :(")
    navigate("/")
  }

  function pageMuscle() {
    alert("Compra Concluída!!")
    navigate("/login")
  }

  const location = useLocation();
  const receivedState = location.state;


  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div>
      <Header />
      <div className="card">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </div>
      <div className="cardTotal">
        <div className="cardText">
          <h1>Pagamento Cartão</h1>
        </div>
        <form>
          <div className="numberandname">
            <input
              type="number"
              name="number"
              placeholder="Número Do Cartão"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="valicvc">
            <input
              type="number"
              name="expiry"
              placeholder="Validade"
              pattern="\d\d/\d\d"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <button type="button" onClick={pageMuscle}>Concluir Compra</button>
          <div className="cancel">
            <button type="button" onClick={stopShop}>Cancelar Comprar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPaymentBoxe