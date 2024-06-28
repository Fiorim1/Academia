import Header from "../../Header"
import Footer from "../../Footer"
import PerfilBoxe from "./components/PerfilBoxe"
import ChangesBoxe from "./components/ChangesBoxe"
import NoticiesBoxe from "./components/NoticiesBoxe"

function PageBoxe() {
    return (
        <div>
            <Header />
            <PerfilBoxe />
            <ChangesBoxe />
            <NoticiesBoxe />
            <Footer />
        </div>
    )
}

export default PageBoxe