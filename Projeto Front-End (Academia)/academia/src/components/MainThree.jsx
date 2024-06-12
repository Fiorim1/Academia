import "../styles/Video.css"

function MainThree() {
    return (
        <div className="videoClass">
            <h2>
                UM POUCO DA NOSSA
                ACADEMIA
            </h2>
            <p>
                Venha Conferir Nossa Academia!
            </p>
            <video controls>
                <source src="../../src/assets/video.mp4" type="video/mp4" />
            </video>

        </div>
    )
}

export default MainThree