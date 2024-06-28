import "../../../../styles/Changes.css"
import { useNavigate } from "react-router-dom"
import ChatMuscle from "../routes/Chat/ChatMuscle"

function Changes() {
    const navigate = useNavigate()

    function goTraining() {
       navigate("/trainingMuscle") 
    }
    function callTrainerMuscle() {
        navigate("/chatmuscle")
    }
   
    return (
        <div className="buttonChange">
        <div className="training">
            <button type="button" onClick={goTraining}>💪🏽 Treinos</button>
        </div>
        <div className="trainer">
            <button type="button" onClick={callTrainerMuscle}>🏋🏼 Chamar Treinador</button>
        </div>
        <div className="suple">
        </div>
    </div>
    )
}

export default Changes