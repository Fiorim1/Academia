import Header from "../../../../Header";
import Footer from "../../../../Footer";
import { useNavigate } from "react-router-dom"
import "../../../../../styles/ChatCross.css"


const ChatMuscle = () => {
    const navigate = useNavigate()
    function callTrainerMuscle() {
        alert("Treinador Chamado!")
        navigate("/pagemuscle")
    }
    return (
        <div>
            <Header />
            <div className="contentChat">
                <div className="title">
                    <h1>Chamar Treinador</h1>
                </div>
                <div className="inputs">
                    <form>
                        <input type="text" placeholder="QUAL SUA DÚVIDA?" />
                    </form>
                    <button type="button" onClick={callTrainerMuscle}>CHAMAR TREINADOR</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChatMuscle;