import { Table, Title, useMantineTheme } from "@mantine/core"
import SearchPathTypeFilter from "../components/SearchPathTypeFilter"
import { useState } from "react"
import { HSR_Paths, LightConeOverview } from "../definition"
import { useMediaQuery } from "@mantine/hooks"
import DevOnly_Breakpoint from "../components/DevOnly_Breakpoint"
import LightConeTableRow from "../components/LightConeTableRow"

const apiLightConeData: LightConeOverview[] = [
    {
        name: 'Coggers',
        path: 'Harmony',
        rarity: 'three',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
        passive: {
            name: 'pogging it out',
            description: 'After the wearer uses attacks or gets hit, additionally regenerates <value> Energy. This effect can only be triggered 1 time per turn.',
            params: {
                min: [4],
                max: [8]
            }
        },
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
        name: 'Coggers2',
        path: 'Harmony',
        rarity: 'three',
        imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
        passive: {
            name: 'pogging it out',
            description: 'testing testing <value> <value>',
            params: {
                min: [1, 2],
                max: [3, 4]
            }
        },
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
        passive: {
            name: 'pogging it out',
            description: 'After the wearer uses attacks or gets hit, additionally regenerates <value> Energy. This effect can only be triggered 1 time per turn.',
            params: {
                min: [4],
                max: [8]
            }
        },
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
    const theme = useMantineTheme()
    const maxMedium = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const minExtraSmall = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`)

    const [pathsArr, setPathsArr] = useState<(HSR_Paths)[]>([])
    const [searchStr, setSearchStr] = useState<string>('')


    const filterLightCones: (arrToFilter: LightConeOverview[]) => LightConeOverview[] = (arrToFilter) => {
        let filteredLightConeArr = arrToFilter

        return filteredLightConeArr
    }

    return (
        <>
            <Title>Light Cones</Title>
            <DevOnly_Breakpoint />
            <SearchPathTypeFilter filterPaths={{ pathsArr, setPathsArr }} search={{ searchStr, setSearchStr }} />
            <Table fontSize={maxMedium ? 'sm' : 'md'} highlightOnHover>
                <thead>
                    <tr>
                        <th>Light Cone</th>
                        <th>Path</th>
                        {maxMedium ?
                            <th>Stats</th> :
                            <>
                                <th>Hp</th>
                                <th>Def</th>
                                <th>Atk</th>
                            </>
                        }
                        {minExtraSmall && <th>Passive</th>}
                    </tr>
                </thead>
                <tbody>
                    {filterLightCones(apiLightConeData).map((lightCone) => <LightConeTableRow lightCone={lightCone} />)}
                </tbody>
            </Table >
        </>
    )
}

export default LightCones 