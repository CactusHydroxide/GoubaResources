import { Stack, Table, Title, Text } from "@mantine/core"
import { CharacterOverview, RelicData } from "../definition"


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
    let relic = apiRelicData[0]
    return (
        <>
            <Title>Relics</Title>
            <Table>
                <tr>
                    <th rowSpan={2}>Relic Set</th>
                    <th>Set Bonus</th>
                    <th>Location</th>
                    <th>Recommended Characters</th>
                </tr>
                <tr>
                    <td>image</td>
                    <td>{relic.name}</td>
                    <td>
                        <Stack spacing='xs'>
                            <Text>
                                <span>2 Piece: </span>
                                {relic.setBonus.two}
                            </Text>
                            {relic.type === 'cavern' &&
                                <>
                                    <hr />
                                    <Text>
                                        <span>4 Piece: </span>
                                        {relic.setBonus.four}
                                    </Text>
                                </>
                            }
                        </Stack>
                    </td>
                </tr>
            </Table >
        </>
    )
}

export default Relics