import { Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Dashboard from "./pages/Dashboard"
import Characters from "./pages/Characters"
import Character from "./pages/Character"
import Wishes from "./pages/Wishes"

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/Characters">
                <Route path="/Characters" element={<Characters />} />
                <Route path=":id" element={<Character />} />
            </Route>
            <Route path="/Wishes" element={<Wishes />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default PageRoutes   