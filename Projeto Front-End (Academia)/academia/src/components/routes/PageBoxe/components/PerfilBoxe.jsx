import { useState, useEffect } from "react"
import perfil from "../../../../assets/perfil.jpg"
import "../../../../styles/PerfilBoxe.css"
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import "../../../../fonts/fontsheaderandfooter.css"
import moment from 'moment-timezone';
import { useNavigate } from "react-router-dom";


function PerfilBoxe() {
    const dataAtual = new Date();
    const dataFormatada = format(dataAtual, "EEEE, d MMMM yyyy", { locale: ptBR });

    
    const navigate = useNavigate()
    const [brasiliaTime, setBrasiliaTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
            setBrasiliaTime(now);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function exitLogin() {
        alert("Você saiu da sua conta!!")
        navigate("/login")
    }

    return (
        <div className="perfil">
            <div className="imgPerfil">
                <img src={perfil} alt="" width="200px" />
            </div>
            <div className="icons">
                <div className="online">
                    <div className="ballGreen"></div>
                    <h3>ONLINE</h3>
                </div>
                <div className="trainingType">
                    <h4>Tipo De Treino: Boxe</h4>
                </div>
                <div className="date">
                    <p>{dataFormatada}</p>
                </div>
                <div className="hour">
                    <p>{brasiliaTime}</p>
                </div>
                <div className="buttonExit">
                    <button type="button" onClick={exitLogin}>SAIR</button>
                </div>
            </div>
        </div>
    )
}

export default PerfilBoxe