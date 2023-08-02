import { Box, Group, Input, MultiSelect, SimpleGrid, TextInput, Title, UnstyledButton, useMantineTheme, Image } from "@mantine/core";
import { CharacterOverview, HSR_DmgType, HSR_Paths } from "../definition";
import CharacterCard from "../components/CharacterCard";
import PathElementIcon from "../components/PathElementIcon";
import { SetStateAction, useEffect, useState } from "react";
import { IconSearch } from '@tabler/icons-react';
import DevOnly_Breakpoint from "../components/DevOnly_Breakpoint";

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
    const theme = useMantineTheme();
    const [dmgTypeFilter, setDmgTypeFilter] = useState<(HSR_DmgType)[]>([])
    const [pathFilter, setPathFilter] = useState<(HSR_Paths)[]>([])
    const [searchStr, setSearchStr] = useState<string>('')
    const allDmgType: HSR_DmgType[] = ['Physical', 'Fire', 'Ice', 'Lightning', 'Wind', 'Quantum', 'Imaginary',]
    const allPaths: HSR_Paths[] = ['Destruction', 'Hunt', 'Erudition', 'Harmony', 'Nihility', 'Preservation', 'Abundance']

    //* Filter Array Functions
    const addToFilter: <T>(toAdd: T, setFilterArr: React.Dispatch<React.SetStateAction<T[]>>) => void = (toAdd, setFilterArr) => {
        setFilterArr(currentArr => {
            if (!currentArr.includes(toAdd)) return ([...currentArr, toAdd])
            return currentArr
        })
    }
    const removeFromFilter: <T>(toRemove: T, setFilterArr: React.Dispatch<React.SetStateAction<T[]>>) => void = (toRemove, setFilterArr) => {
        setFilterArr(currentArr => {
            if (currentArr.includes(toRemove)) {
                return currentArr.filter((filterName) => filterName !== toRemove)
            }
            return currentArr
        })
    }
    const filterActive: <T>(toCheck: T, filterArr: T[]) => boolean = (toCheck, filterArr) => {
        return filterArr.includes(toCheck)
    }
    const filteredCharArr = (characterList: CharacterOverview[]): CharacterOverview[] => {
        let filteredCharacterList: CharacterOverview[] = characterList

        if (dmgTypeFilter.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => dmgTypeFilter.includes(character.dmgType))
        }
        if (pathFilter.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => pathFilter.includes(character.path))
        }
        if (searchStr.length > 0) {
            filteredCharacterList = filteredCharacterList.filter((character) => (character.name.toLocaleLowerCase().search(searchStr.toLowerCase())) != -1)
        }

        return filteredCharacterList
    }

    return (
        <>
            <Title>Characters</Title>
            < DevOnly_Breakpoint />
            <Group h={75} spacing='sm' noWrap>
                <TextInput
                    icon={<IconSearch />}
                    placeholder="Character"
                    radius="xl"
                    size='md'
                    value={searchStr}
                    onChange={(event) => setSearchStr(event.currentTarget.value)}
                />
                <Group spacing={'xs'}
                    sx={{
                        border: `1px solid`,
                        borderRadius: '50px',
                        borderColor: theme.colors.dark[4],
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '42px'
                    }}
                >
                    {allDmgType.map((filterDmgType) =>
                        <UnstyledButton
                            key={`filter_${filterDmgType}`}
                            sx={{ opacity: filterActive(filterDmgType, dmgTypeFilter) ? 1 : 0.3, width: '30px', height: '30px' }}
                            onClick={() => {
                                filterActive(filterDmgType, dmgTypeFilter) ? removeFromFilter(filterDmgType, setDmgTypeFilter) : addToFilter(filterDmgType, setDmgTypeFilter)
                            }} >
                            <PathElementIcon icon={filterDmgType} />
                        </UnstyledButton>
                    )}
                </Group>
                <Group spacing={'xs'}
                    sx={{
                        border: `1px solid`,
                        borderRadius: '50px',
                        borderColor: theme.colors.dark[4],
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '42px'
                    }}
                >
                    {allPaths.map((filterPathType) =>
                        <UnstyledButton
                            key={`filter_${filterPathType}`}
                            sx={{ opacity: filterActive(filterPathType, pathFilter) ? 1 : 0.3, width: '30px', height: '30px' }}
                            onClick={() => {
                                filterActive(filterPathType, pathFilter) ? removeFromFilter(filterPathType, setPathFilter) : addToFilter(filterPathType, setPathFilter)
                            }}
                        >
                            <PathElementIcon icon={filterPathType} />
                        </UnstyledButton>
                    )}
                </Group>
            </Group >
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