import { useParams } from "react-router-dom"

type CharacterPageParams = {
    id: string
}

const Character = () => {
    const { id } = useParams<CharacterPageParams>()

    return (
        <>
            <h1>Character</h1>
            <p>This page is for {id}</p>
        </>
    )
}

export default Character