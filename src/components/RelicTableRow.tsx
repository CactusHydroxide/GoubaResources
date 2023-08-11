import { Anchor, Box, Group, Stack, Text, useMantineTheme } from "@mantine/core"
import { RelicData } from "../definition"
import { FC } from "react"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"

interface RelicTableRowProps {
    relic: RelicData
}

const RelicTableRow: FC<RelicTableRowProps> = ({ relic }) => {
    const theme = useMantineTheme()
    const isSmallerThanXS = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)
    const [infoOpened, infoOpenedHandler] = useDisclosure(true)

    return <>
        <Box component="tr" sx={{ '&:hover': { cursor: isSmallerThanXS ? 'pointer' : 'auto' } }}>
            <Box component="td" miw={70} maw={100}>image</Box>
            <Box component='td' miw={100} maw={250}>{relic.name}</Box>
            <Box component='td' miw={isSmallerThanXS ? '50%' : '25%'}>
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
            {!isSmallerThanXS &&
                <>
                    <Box component="td" miw={125}>{relic.location}</Box>
                    <Box component="td" miw={125}>recommended characters</Box>
                </>
            }
        </Box >
        {
            isSmallerThanXS &&
            <Box component='tr' >
                <Box component='td' colSpan={3} sx={{ border: '0px !important' }}>
                    <Box>
                        <Anchor onClick={() => {
                            infoOpenedHandler.toggle()
                        }} >More Info </Anchor>
                    </Box>
                    <Box
                        sx={{
                            //TODO: adjust max height 
                            maxHeight: infoOpened ? 0 : 200,
                            overflow: 'hidden',
                            transition: 'max-height 250ms ease-out'
                        }}>
                        <Stack spacing='md' pt='xs' pb='xs' >
                            <Group><Text span w='35%'>Location</Text>{relic.location}</Group>
                            <Group><Text span w='35%'>Recommended Users</Text>Recommended users</Group>
                        </Stack>
                    </Box>
                </Box >
            </Box >
        }
    </>
}

export default RelicTableRow