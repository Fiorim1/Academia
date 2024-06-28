import { useState, useEffect } from "react"
import perfil from "../../../../assets/perfil.jpg"
import "../../../../styles/PageMuscle.css"
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import "../../../../fonts/fontsheaderandfooter.css"
import moment from 'moment-timezone';
import { useNavigate } from "react-router-dom";


function Perfil() {
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
                    <h4>Tipo De Treino: Musculação</h4>
                </div>
                <div className="date">
                    <p>{dataFormatada}</p>
                </div>
                <div className="hour">
                    
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg> */}
                    <p>{brasiliaTime}</p>
                </div>
                <div className="buttonExit">
                    <button type="button" onClick={exitLogin}>SAIR</button>
                </div>
            </div>
        </div>
    )
}

export default Perfil