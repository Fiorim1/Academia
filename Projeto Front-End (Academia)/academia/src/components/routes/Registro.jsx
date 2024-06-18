import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";
    
import "./Registro.css"


const Cadastro = () => {
    const[username, setUsername]=useState("");
    const[senha, setSenha]=useState("");

    const handleSubmit= (event) => {
        event.preventDefault();

        console.log("teste", username, senha)

        console.log("Envio");
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Digite o email</h1>           
                <div>
                    <input 
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon"/>
                </div>
                <div>
                    <input 
                        type="senha"
                        placeholder="Senha" 
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <FaLock className="icon"/>
                </div>     

                <div className="recall-forget">
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <a href="#">Esqueci minha senha.</a>
                </div>

                <button>Cadastrar</button> 

                <div className="login-link"> 
                    <p>
                        Já possui uma conta? <a href="#">Login</a>
                    </p>
                </div>    
        </form>
    </div>
  );
};

export default Cadastro;
