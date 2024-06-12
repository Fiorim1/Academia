import "../styles/Plans.css"

function Plans() {
    return (
        <div>
            <div className="title">
            <h2>NOSSOS PLANOS</h2>
            </div>
            <div className="plans">
                <div className="muscleBtn">
                    <div className="muscle">
                        <img src="../../src/assets/muscle.png" alt="" />
                        <h4>MUSCULAÇÂO</h4>
                    </div>
                    <button>ASSINAR</button>
                </div>

                <div className="crossBtn">
                    <div className="cross">
                        <img src="../../src/assets/cross.png" alt="" />
                        <h4>CROSSFIT</h4>
                    </div>
                    <button>ASSINAR</button>
                </div>

                <div className="boxeBtn">
                    <div className="boxe">
                        <img src="../../src/assets/boxe.png" alt="" />
                        <h4>BOXE</h4>
                    </div>
                    <button>ASSINAR</button>
                </div>
            </div>
        </div>
    )
}

export default Plans