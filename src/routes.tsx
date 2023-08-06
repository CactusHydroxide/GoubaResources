import { Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Dashboard from "./pages/Dashboard"
import Characters from "./pages/Characters"
import Character from "./pages/Character"
import Wishes from "./pages/Wishes"
import LightCones from "./pages/LightCones"
import LightCone from "./pages/LightCone"

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/Characters">
                <Route index element={<Characters />} />
                <Route path=":id" element={<Character />} />
            </Route>
            <Route path="/LightCones">
                <Route index element={<LightCones />} />
                <Route path=":id" element={<LightCone />} />
            </Route>
            <Route path="/Wishes" element={<Wishes />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default PageRoutes   