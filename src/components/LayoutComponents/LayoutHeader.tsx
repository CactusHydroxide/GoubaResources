import { Box, Burger, Header, MediaQuery, Text, useMantineTheme } from "@mantine/core"
import { FC } from "react"

interface LayoutHeaderProps {
    navOpened: boolean
    setNavOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const LayoutHeader: FC<LayoutHeaderProps> = ({ navOpened, setNavOpened }) => {
    const theme = useMantineTheme();
    return (
        <Header height={{ base: 50, md: 70 }} p="md">
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={navOpened}
                        onClick={() => setNavOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Text style={{ marginRight: '1.5em' }}>(gouba logo) website name</Text>
            </Box>
        </Header>
    )
}

export default LayoutHeader
