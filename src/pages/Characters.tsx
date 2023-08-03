import { SimpleGrid, Title } from "@mantine/core";
import { CharacterOverview, HSR_DmgType, HSR_Paths, HSR_Rarity } from "../definition";
import CharacterCard from "../components/CharacterCard";
import { useState } from "react";
import SearchPathTypeFilter from "../components/SearchPathTypeFilter";

//! To be called from API && suspend main body
const apiCharacterData: CharacterOverview[] = [
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
        name: 'Himeko',
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
    const [dmgTypesArr, setDmgTypesArr] = useState<(HSR_DmgType)[]>([])
    const [pathsArr, setPathsArr] = useState<(HSR_Paths)[]>([])
    const [rarityArr, setRarityArr] = useState<(HSR_Rarity[])>([])
    const [searchStr, setSearchStr] = useState<string>('')

    //* Filter Array Functions
    const filteredCharArr = (characterList: CharacterOverview[]): CharacterOverview[] => {
        let filteredCharacterList: CharacterOverview[] = characterList

        if (dmgTypesArr.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => dmgTypesArr.includes(character.dmgType))
        }
        if (pathsArr.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => pathsArr.includes(character.path))
        }
        if (rarityArr.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => rarityArr.includes(character.rarity))
        }
        if (searchStr.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => (character.name.toLocaleLowerCase().search(searchStr.toLowerCase())) != -1)
        }

        return filteredCharacterList
    }

    return (
        <>
            <Title>Characters</Title>
            <SearchPathTypeFilter
                search={{ searchStr, setSearchStr }}
                filterDmgType={{
                    dmgTypesArr,
                    setDmgTypesArr
                }}
                filterPaths={{
                    pathsArr,
                    setPathsArr
                }}
                filterRarity={{
                    rarityArr,
                    setRarityArr,
                    excluding: ['two', 'three']
                }}
            />
            <SimpleGrid cols={3} breakpoints={[
                { minWidth: 'xs', cols: 4 },
                { minWidth: 'md', cols: 5 },
                { minWidth: 'lg', cols: 6 }
            ]}>
                {filteredCharArr(apiCharacterData).map((character) => {
                    return (
                        <CharacterCard character={character} />
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default Characters