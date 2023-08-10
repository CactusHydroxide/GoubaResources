import { Route, Routes } from "react-router-dom"
import { lazy } from "react"

const Dashboard = lazy(() => import('./pages/Dashboard'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const Characters = lazy(() => import('./pages/Characters'))
const Character = lazy(() => import('./pages/Character'))
const Wishes = lazy(() => import('./pages/Wishes'))
const LightCones = lazy(() => import('./pages/LightCones'))
const LightCone = lazy(() => import('./pages/LightCone'))
const Relics = lazy(() => import('./pages/Relics'))

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
            <Route path='/Relics' element={<Relics />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default PageRoutes   