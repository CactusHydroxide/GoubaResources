import { Group, SimpleGrid, Title } from "@mantine/core";
import { CharacterOverview } from "../definition";
import CharacterCard from "../components/CharacterCard";


//! To be called from API && suspend main body
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
            <Group h={75}>
                <Title>Characters</Title>
            </Group>
            <SimpleGrid cols={3} breakpoints={[
                { minWidth: 'xs', cols: 4 },
                { minWidth: 'md', cols: 5 },
                { minWidth: 'lg', cols: 6 }
            ]}>
                {characterList.map((character) => {
                    return (
                        <CharacterCard character={character} />
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default Characters