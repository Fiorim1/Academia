import "../styles/MainOne.css"
import { useNavigate } from "react-router-dom"


function MainOne() {

    function alerPlan() {
        alert("Escolha um de nossos planos abaixo!")
    }
    return (
        <div className="total">
            <div className="ball">
                <div className="imagem">
                    <img src="../../src/assets/treinamento.png" alt="" width="350px" height="350px" />
                </div>
            </div>
            <div className="contentMain">
                <h2>FITNESS CLUB</h2>
                <p>Adentre ao Fitness Club e descubra um novo mundo de possibilidades para aprimorar sua saúde e bem-estar. Nossa academia oferece um ambiente acolhedor e estimulante, onde cada sessão de treino se torna uma oportunidade de superação pessoal. Com equipamentos modernos e instrutores dedicados, estamos aqui para guiá-lo em cada passo da sua jornada fitness. Prepare-se para se surpreender com os resultados que alcançará e com a comunidade vibrante que o aguarda. Venha fazer parte do Fitness Club e transforme sua vida hoje mesmo.</p>
                <button onClick={alerPlan}>Venha Ser FITNESS</button>
            </div>
        </div>
    )
}

export default MainOne
