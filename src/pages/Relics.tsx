import { Table, Title, useMantineTheme } from "@mantine/core"
import { HSR_RelicType, RelicData } from "../definition"
import { useState } from "react"
import SearchPathTypeFilter from "../components/SearchPathTypeFilter"
import RelicTableRow from "../components/RelicTableRow"
import DevOnly_Breakpoint from "../components/DevOnly_Breakpoint"
import { useMediaQuery } from "@mantine/hooks"


const apiRelicData: RelicData[] = [
    {
        name: 'Husk of Opulent Dreams',
        type: 'cavern',
        imageUrl: {
        },
        setBonus: {
            two: 'heal more',
            four: 'deal damage after healing alot more'
        },
        recommended: [{
            name: 'March 7th',
            dmgType: 'Ice',
            path: "Preservation",
            rarity: 'four',
            imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d3/Character_March_7th_Icon.png'
        },],
        location: 'Your house'
    },
    {
        name: 'Orb and Balls',
        type: 'planar',
        imageUrl: {
        },
        setBonus: {
            two: 'heal more',
        },
        recommended: [{
            name: 'March 7th',
            dmgType: 'Ice',
            path: "Preservation",
            rarity: 'four',
            imageUrl: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d3/Character_March_7th_Icon.png'
        },],
        location: 'My house'
    }
]

const Relics = () => {
    const theme = useMantineTheme()
    const isSmallerThanXS = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

    const [relicTypeArr, setRelicTypeArr] = useState<HSR_RelicType[]>([])
    const [searchStr, setSearchStr] = useState<string>('')
    const filteredRelicArr = (relicList: RelicData[]): RelicData[] => {
        let filteredRelicList: RelicData[] = relicList

        if (relicTypeArr.length > 0) {
            filteredRelicList = filteredRelicList.filter((relic) => relicTypeArr.includes(relic.type))

        }
        if (searchStr.length > 0) {
            filteredRelicList = filteredRelicList.filter((relic) => (relic.name.toLocaleLowerCase().search(searchStr.toLowerCase())) != -1)
        }

        return filteredRelicList
    }
    return (
        <>
            <Title>Relics</Title>
            <DevOnly_Breakpoint />
            <SearchPathTypeFilter filterRelic={{ relicTypeArr, setRelicTypeArr }} search={{ searchStr, setSearchStr }} />
            <Table
                sx={{
                    fontWeight: 600,
                    textAlign: 'left',
                    'span': {
                        color: theme.colors.dark[1]
                    },
                    'td, th': {
                        padding: '5px'
                    }
                }}>
                <thead>
                    <tr>
                        <th colSpan={2}>Relic Set</th>
                        <th>Set Bonus</th>
                        {!isSmallerThanXS &&
                            <>
                                <th>Location</th>
                                <th>Recommended Users</th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {filteredRelicArr(apiRelicData).map((relic) =>
                        <RelicTableRow relic={relic} />
                    )}
                </tbody>
            </Table >
        </>
    )
}

export default Relics