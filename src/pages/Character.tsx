import { useParams } from "react-router-dom"
import PageHeader from "../components/PageHeader"

type CharacterPageParams = {
    id: string
}

const Character = () => {
    const { id } = useParams<CharacterPageParams>()

    return (
        <>
            <PageHeader header='Characters' />
            <h1>Character</h1>
            <p>This page is for {id}</p>
        </>
    )
}

export default Character