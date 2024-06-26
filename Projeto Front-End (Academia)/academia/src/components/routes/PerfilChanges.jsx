import { useState, useEffect } from "react"
import perfil from "../../assets/perfil.jpg"
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import moment from 'moment-timezone';
import "../../styles/PerfilChanges.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useNavigate } from "react-router-dom"


const PerfilChanges = () => {
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

    function goMuscle() {
        navigate('/pagemuscle')
    }

    function goCross() {
        navigate("/pagecross")
    }

    return (
        <div>
            <Header />
            <div className="perfil">
                <div className="imgPerfil">
                    <img src={perfil} alt="" width="200px" />
                </div>
                <div className="icons">
                    <div className="online">
                        <div className="ballGreen"></div>
                        <h3>ONLINE</h3>
                    </div>
                    <div className="date">
                        <p>{dataFormatada}</p>
                    </div>
                    <div className="hour">
                        <p>{brasiliaTime}</p>
                    </div>
                </div>
            </div>
            <div className="whatTraining">
                <h2>Escolha Sua Modalidade:</h2>
            </div>
            <div className="changesTraining">
                <div className="muscleBtn">
                    <div className="muscle">
                        <img src="../../src/assets/muscle.png" alt="" />
                        <h4>MUSCULAÇÂO</h4>
                    </div>
                    <button type="button" onClick={goMuscle}>IR</button>
                </div>

                <div className="crossBtn">
                    <div className="cross">
                        <img src="../../src/assets/cross.png" alt="" />
                        <h4>CROSSFIT</h4>
                    </div>
                    <button type="button" onClick={goCross}>IR</button>
                </div>

                <div className="boxeBtn">
                    <div className="boxe">
                        <img src="../../src/assets/boxe.png" alt="" />
                        <h4>BOXE</h4>
                    </div>
                    <button>IR</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PerfilChanges