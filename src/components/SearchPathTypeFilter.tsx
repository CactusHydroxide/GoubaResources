import { Button, Collapse, Group, TextInput, UnstyledButton, useMantineTheme } from "@mantine/core"
import PathTypeImage from "./PathTypeImage"
import { HSR_DmgType, HSR_Paths } from "../definition"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown, IconSearch } from "@tabler/icons-react"
import { FC, Dispatch, SetStateAction } from "react"

interface SearchPathTypeFilterProps {
    search?: {
        searchStr: string,
        setSearchStr: Dispatch<SetStateAction<string>>
    },
    filterDmgType?: {
        dmgTypesArr: HSR_DmgType[],
        setDmgTypesArr: Dispatch<SetStateAction<HSR_DmgType[]>>
    },
    filterPaths?: {
        pathsArr: HSR_Paths[],
        setPathsArr: Dispatch<SetStateAction<HSR_Paths[]>>
    }
}

export const allDmgTypeArr: HSR_DmgType[] = ['Physical', 'Fire', 'Ice', 'Lightning', 'Wind', 'Quantum', 'Imaginary',]
export const allPathsArr: HSR_Paths[] = ['Destruction', 'Hunt', 'Erudition', 'Harmony', 'Nihility', 'Preservation', 'Abundance']


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
            <Button
                onClick={toggle}
                variant="default"
                radius='xl'
                h={42} mt='sm' mb='sm'
                rightIcon={<IconChevronDown
                    style={{
                        rotate: opened ? '0deg' : "180deg",
                        transition: 'rotate 200ms ease-in-out'
                    }}
                />}
            >Filter</Button >
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
                            height: '42px',
                            '&:hover': {
                                backgroundColor: theme.colors.dark[5]
                            }
                        }}
                    >
                        {allDmgTypeArr.map((filtered) =>
                            <UnstyledButton
                                key={`filter_${filtered}`}
                                sx={{
                                    opacity: filterActive(filtered, filterDmgType.dmgTypesArr) ? 1 : 0.3,
                                    width: '30px',
                                    height: '30px',
                                    transition: 'opacity 150ms ease-out',
                                    '&:hover': {
                                        opacity: filterActive(filtered, filterDmgType.dmgTypesArr) ? 1 : 0.7,
                                    }
                                }}
                                onClick={() => {
                                    filterActive(filtered, filterDmgType.dmgTypesArr) ? removeFromFilter(filtered, filterDmgType.setDmgTypesArr) : addToFilter(filtered, filterDmgType.setDmgTypesArr)
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
                            height: '42px',
                            '&:hover': {
                                backgroundColor: theme.colors.dark[5]
                            }
                        }}
                    >
                        {allPathsArr.map((filtered) =>
                            <UnstyledButton
                                key={`filter_${filtered}`}
                                sx={{
                                    opacity: filterActive(filtered, filterPaths.pathsArr) ? 1 : 0.3,
                                    width: '30px',
                                    height: '30px',
                                    transition: 'opacity 150ms ease-out',
                                    '&:hover': {
                                        opacity: filterActive(filtered, filterPaths.pathsArr) ? 1 : 0.7,
                                    }
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
                        value={search.searchStr}
                        miw={150}
                        sx={{
                            '.mantine-TextInput-input': {
                                '&:hover': {
                                    backgroundColor: theme.colors.dark[5]
                                }
                            }
                        }}
                        onChange={(event) => search.setSearchStr(event.currentTarget.value)}
                    />}
                </Group >
            </Collapse>
        </>
    )
}

export default SearchPathTypeFilter