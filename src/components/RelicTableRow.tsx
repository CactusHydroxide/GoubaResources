import { Box, Stack, Text } from "@mantine/core"
import { RelicData } from "../definition"
import { FC } from "react"

interface RelicTableRowProps {
    relic: RelicData
}

const RelicTableRow: FC<RelicTableRowProps> = ({ relic }) => {
    return <>
        <tr>
            <Box component="td" miw={70} maw={100}>image</Box>
            <Box component='td' maw={250}>{relic.name}</Box>
            <Box component='td' miw={250}>
                <Stack spacing='xs'>
                    <Text>
                        <span>2 Piece: </span>
                        {relic.setBonus.two}
                    </Text>
                    {relic.type === 'cavern' &&
                        <>
                            <Text>
                                <span>4 Piece: </span>
                                {relic.setBonus.four}
                            </Text>
                        </>
                    }
                </Stack>
            </Box>
            <Box component='td' miw={125}>{relic.location}</Box>
            <Box component="td" miw={175}>recommended characters</Box>
        </tr></>
}

export default RelicTableRow