import { Table, Title, Image, Stack, Text, Group, Box, useMantineTheme } from "@mantine/core"
import SearchPathTypeFilter from "../components/SearchPathTypeFilter"
import { useState } from "react"
import { HSR_Paths, LightConeOverview } from "../definition"
import { IconHeart, IconShield, IconSword } from "@tabler/icons-react"
import PathTypeImage from "../components/PathTypeImage"
import { useMediaQuery } from "@mantine/hooks"

const apiLightConeData: LightConeOverview[] = [
    {
        name: 'Coggers',
        path: 'Harmony',
        rarity: 'three',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
        hp: {
            min: 0,
            max: 999
        },
        def: {
            min: 0,
            max: 999
        },
        atk: {
            min: 0,
            max: 999
        }
    },
    {
        name: 'Coggers',
        path: 'Harmony',
        rarity: 'three',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
        hp: {
            min: 0,
            max: 999
        },
        def: {
            min: 0,
            max: 999
        },
        atk: {
            min: 0,
            max: 999
        }
    },
    {
        name: 'Coggers',
        path: 'Harmony',
        rarity: 'three',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
        hp: {
            min: 0,
            max: 999
        },
        def: {
            min: 0,
            max: 999
        },
        atk: {
            min: 0,
            max: 999
        }
    },
]

const LightCones = () => {
    const [pathsArr, setPathsArr] = useState<(HSR_Paths)[]>([])
    const [searchStr, setSearchStr] = useState<string>('')
    const lightCone = apiLightConeData[0]

    const theme = useMantineTheme()
    const isExtraSmall = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <>
            <Title>Light Cones</Title>
            <SearchPathTypeFilter filterPaths={{ pathsArr, setPathsArr }} search={{ searchStr, setSearchStr }} />
            <Table fontSize={'md'} highlightOnHover>
                <thead>
                    <tr>
                        <th>Light Cone</th>
                        <th>Path</th>
                        <th>Hp</th>
                        <th>Def</th>
                        <th>Atk</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ cursor: 'pointer', fontWeight: 600, width: '100%' }}>
                        <td><Group spacing='xs'>
                            <Image src={lightCone.imageUrl} fit="contain" height={50} width='auto' /><Text>{lightCone.name}</Text>
                        </Group></td>
                        <td><Group spacing='xs'>
                            <PathTypeImage icon={lightCone.path} imageProps={{ height: 30, width: 'auto' }} /><Text>{lightCone.path}</Text>
                        </Group></td>
                        {isExtraSmall ?
                            <td colSpan={3}>
                                <Stack>
                                    <Group noWrap>
                                        <IconHeart /><Text>{lightCone.hp.min} ~ {lightCone.hp.max}</Text>
                                    </Group>

                                    <Group noWrap>
                                        <IconShield /><Text>{lightCone.def.min} ~ {lightCone.def.max}</Text>
                                    </Group>

                                    <Group noWrap>
                                        <IconSword /><Text>{lightCone.atk.min} ~ {lightCone.atk.max}</Text>
                                    </Group>
                                </Stack>
                            </td> :
                            <>
                                <td>
                                    <Group spacing='xs' noWrap>
                                        <IconHeart /><Text>{lightCone.hp.min} ~ {lightCone.hp.max}</Text>
                                    </Group>

                                </td>
                                <td>
                                    <Group spacing='xs' noWrap>
                                        <IconShield /><Text>{lightCone.def.min} ~ {lightCone.def.max}</Text>
                                    </Group>
                                </td>
                                <td>
                                    <Group spacing='xs' noWrap>
                                        <IconSword /><Text>{lightCone.atk.min} ~ {lightCone.atk.max}</Text>
                                    </Group>
                                </td>
                            </>
                        }
                    </tr>
                </tbody>
            </Table >
        </>
    )
}

export default LightCones 