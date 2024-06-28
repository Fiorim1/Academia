import "../styles/Header.css"
import "../fonts/fontsheaderandfooter.css"


function Header() {
    return (
        <div>
            <nav className="navBar">
                <div className="Logo">
                    <img src="../../src/assets/Logo.png" alt=""  width="80px"/>
                    <h1>FITNESS CLUB</h1>
                </div>
                <div className="navList">
                <h1>#VEMPRAFITNESS</h1>
                </div>
            </nav>
        </div>
    )
}

export default Header
