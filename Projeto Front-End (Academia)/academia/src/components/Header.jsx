import "../styles/Header.css"

function Header() {
    return (
        <div>
            <nav className="navBar">
                <div className="Logo">
                    <img src="../../src/assets/Logo.png" alt=""  width="80px"/>
                    <h1>FITNESS CLUB</h1>
                </div>
                <div className="navList">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href=""Abour>About</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
