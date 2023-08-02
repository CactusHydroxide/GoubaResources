import { Button, Collapse, Group, TextInput, UnstyledButton, useMantineTheme } from "@mantine/core"
import PathTypeImage from "./PathTypeImage"
import { HSR_DmgType, HSR_Paths } from "../definition"
import { useDisclosure } from "@mantine/hooks"
import { IconFilter, IconSearch } from "@tabler/icons-react"
import { FC, Dispatch, SetStateAction } from "react"

interface SearchPathTypeFilterProps {
    search?: {
        searchState: string,
        setSearchState: Dispatch<SetStateAction<string>>
    },
    filterDmgType?: {
        allDmgTypeArr: HSR_DmgType[]
        dmgTypeArr: HSR_DmgType[],
        setDmgTypeArr: Dispatch<SetStateAction<HSR_DmgType[]>>
    },
    filterPaths?: {
        allPathsArr: HSR_Paths[]
        pathsArr: HSR_Paths[],
        setPathsArr: Dispatch<SetStateAction<HSR_Paths[]>>
    }
}

const SearchPathTypeFilter: FC<SearchPathTypeFilterProps> = ({ search, filterDmgType, filterPaths }) => {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);

    const addToFilter: <T>(toAdd: T, setFilterArr: Dispatch<SetStateAction<T[]>>) => void = (toAdd, setFilterArr) => {
        setFilterArr(currentArr => {
            if (!currentArr.includes(toAdd)) return ([...currentArr, toAdd])
            return currentArr
        })
    }
    const removeFromFilter: <T>(toRemove: T, setFilterArr: Dispatch<SetStateAction<T[]>>) => void = (toRemove, setFilterArr) => {
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

    return (
        <>
            <Button onClick={toggle} rightIcon={<IconFilter />} variant="default" radius='xl' h={42} mt='sm' mb='sm'>Filter </Button >
            <Collapse in={opened}>
                <Group spacing='sm' mb='sm'>
                    {!!filterDmgType && <Group spacing={'xs'}
                        miw={300}
                        noWrap
                        sx={{
                            border: `1px solid`,
                            borderRadius: '50px',
                            borderColor: theme.colors.dark[4],
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            height: '42px'
                        }}
                    >
                        {filterDmgType.allDmgTypeArr.map((filtered) =>
                            <UnstyledButton
                                key={`filter_${filtered}`}
                                sx={{
                                    opacity: filterActive(filtered, filterDmgType.dmgTypeArr) ? 1 : 0.3,
                                    width: '30px',
                                    height: '30px',
                                }}
                                onClick={() => {
                                    filterActive(filtered, filterDmgType.dmgTypeArr) ? removeFromFilter(filtered, filterDmgType.setDmgTypeArr) : addToFilter(filtered, filterDmgType.setDmgTypeArr)
                                }} >
                                <PathTypeImage icon={filtered} />
                            </UnstyledButton>
                        )}
                    </Group>}
                    {!!filterPaths && <Group spacing={'xs'}
                        miw={300}
                        noWrap
                        sx={{
                            border: `1px solid`,
                            borderRadius: '50px',
                            borderColor: theme.colors.dark[4],
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            height: '42px'
                        }}
                    >
                        {filterPaths.allPathsArr.map((filtered) =>
                            <UnstyledButton
                                key={`filter_${filtered}`}
                                sx={{
                                    opacity: filterActive(filtered, filterPaths.pathsArr) ? 1 : 0.3,
                                    width: '30px',
                                    height: '30px',
                                }}
                                onClick={() => {
                                    filterActive(filtered, filterPaths.pathsArr) ? removeFromFilter(filtered, filterPaths.setPathsArr) : addToFilter(filtered, filterPaths.setPathsArr)
                                }}
                            >
                                <PathTypeImage icon={filtered} />
                            </UnstyledButton>
                        )}
                    </Group>}
                    {!!search && <TextInput
                        icon={<IconSearch />}
                        placeholder="Character"
                        radius="xl"
                        size='md'
                        value={search.searchState}
                        miw={150}
                        onChange={(event) => search.setSearchState(event.currentTarget.value)}
                    />}
                </Group >
            </Collapse>
        </>
    )
}

export default SearchPathTypeFilter