import { useParams } from "react-router-dom"

type LightConeParams = {
    id: string
}

const LightCone = () => {
    const { id } = useParams<LightConeParams>()
    

    return (
        <>
            <h1>Light Cone</h1>
            <p>This page is for {id}</p>
        </>
    )
}

export default LightCone