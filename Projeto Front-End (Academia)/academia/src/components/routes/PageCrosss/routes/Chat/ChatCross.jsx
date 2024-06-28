import Header from "../../../../Header";
import Footer from "../../../../Footer";
import { useNavigate } from "react-router-dom"
import "../../../../../styles/ChatCross.css"


const ChatCross = () => {
    const navigate = useNavigate()
    function callTrainer() {
        alert("Treinador Chamado!")
        navigate("/pagecross")
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
                    <button type="button" onClick={callTrainer}>CHAMAR TREINADOR</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChatCross;