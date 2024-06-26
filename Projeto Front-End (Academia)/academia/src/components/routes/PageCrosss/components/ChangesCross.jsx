import "../../../../styles/ChangeCross.css"
import { useNavigate } from "react-router-dom"

function ChangesCross() {
    const navigate = useNavigate()

    function goTrainingCross() {
       navigate("/trainingCross") 
    }
    function callTrainner() {
        navigate("/chatcross")
    }
    return (
        <div className="buttonChange">
        <div className="training">
            <button type="button" onClick={goTrainingCross}>💪🏽 Treinos</button>
        </div>
        <div className="trainer">
            <button type="button" onClick={callTrainner}>🏋🏼 Chamar Treinador</button>
        </div>
        <div className="suple">
        </div>
    </div>
    )
}

export default ChangesCross