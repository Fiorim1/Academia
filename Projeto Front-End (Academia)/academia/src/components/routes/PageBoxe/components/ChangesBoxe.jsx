import "../../../../styles/ChangesBoxe.css"
import { useNavigate } from "react-router-dom"

function ChangesBoxe() {
    const navigate = useNavigate()

    function goTraining() {
       navigate("/trainingboxe") 
    }
    function callTrainerMuscle() {
        navigate("/chatboxe")
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

export default ChangesBoxe