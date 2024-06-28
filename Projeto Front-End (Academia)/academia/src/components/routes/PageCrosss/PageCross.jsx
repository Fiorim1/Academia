import Header from "../../Header"
import Footer from "../../Footer"
import PerfilCross from "./components/PerfilCross"
import ChangesCross from "./components/ChangesCross"
import NoticiesCross from "./components/NoticiesCross"

function PageCross() {
    return (
        <div>
            <Header />
            <PerfilCross />
            <ChangesCross />
            <NoticiesCross />
            <Footer />
        </div>
    )
}

export default PageCross