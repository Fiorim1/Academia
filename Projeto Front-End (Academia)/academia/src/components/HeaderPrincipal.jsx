import "../styles/Header.css"
import "../fonts/fontsheaderandfooter.css"
import "../../src/styles/HeaderPrincipal.css"
import { useNavigate } from "react-router-dom"

function HeaderPrincipal() {
    const navigate = useNavigate()
    function login() {
        navigate("/login")
    }
    return (
        <div>
            <nav className="navBar">
                <div className="Logo">
                    <img src="../../src/assets/Logo.png" alt=""  width="80px"/>
                    <h1>FITNESS CLUB</h1>
                </div>
                <div className="navList">
                <h1>#VEMPRAFITNESS</h1>
                <button type="button" onClick={login}>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default HeaderPrincipal
