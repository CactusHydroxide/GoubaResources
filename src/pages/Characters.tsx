import { Grid } from "@mantine/core";
import { CharacterOverview } from "../definition";
import PageHeader from "../components/PageHeader";
import CharacterCard from "../components/CharacterCard";

//! To be called from API
const characterList: CharacterOverview[] = [
    {
        name: 'Trailblazer',
        dmgType: 'Physical',
        path: "Destruction",
        rarity: 'five',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Character_Trailblazer_(Destruction)_Icon.png'
    },
    {
        name: 'March 7th',
        dmgType: 'Ice',
        path: "Preservation",
        rarity: 'four',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d3/Character_March_7th_Icon.png'
    },
    {
        name: 'Dan Heng',
        dmgType: 'Wind',
        path: "Hunt",
        rarity: 'four'
    },
    {
        name: 'Welt',
        dmgType: 'Imaginary',
        path: "Nihility",
        rarity: 'five'
    },
    {
        name: 'Himiko',
        dmgType: 'Fire',
        path: "Erudition",
        rarity: 'five',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/0/00/Character_Himeko_Icon.png'
    },
    {
        name: 'Herta',
        dmgType: 'Ice',
        path: "Erudition",
        rarity: 'four',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bf/Character_Herta_Icon.png'
    },
]

const Characters = () => {
    return (
        <>
            <PageHeader header='Characters' />
            <Grid justify="space-around">
                {characterList.map((character) => {
                    return (
                        <Grid.Col lg={2} md={3} sm={6} maw={{ base: '30%', sm: '23%', md: '19%', lg: '210px' }} >
                            <CharacterCard character={character} />
                        </Grid.Col>
                    )
                })}
            </Grid>
        </>
    )
}

export default Characters