import { Box, Navbar } from "@mantine/core"
import { FC } from "react"
import { IconCards, IconHome, IconTicket, IconUserCircle } from '@tabler/icons-react';
import NavButton, { NavButtonProps } from "../NavButton";

interface LayoutNavbarProps {
    navOpened: boolean
    setNavOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const LayoutNavbar: FC<LayoutNavbarProps> = ({ navOpened, setNavOpened }) => {
    const navList: NavButtonProps[] = [
        {
            label: 'Home',
            targetUrl: '/',
            icon: <IconHome size='24px' />,
            setNavOpened: setNavOpened
        },
        {
            label: 'Characters',
            targetUrl: '/Characters',
            icon: <IconUserCircle size='24px' />,
            setNavOpened: setNavOpened
        },
        {
            label: 'Light Cones',
            targetUrl: '/LightCones',
            icon: <IconCards size='24px' />,
            setNavOpened: setNavOpened
        },
        {
            label: 'Wishes',
            targetUrl: '/Wishes',
            icon: <IconTicket size='24px' />,
            setNavOpened: setNavOpened
        },
    ]
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!navOpened} width={{ sm: 200 }}>
            <nav>
                {navList.map((navButtonProps) =>
                    <NavButton
                        key={navButtonProps.label}
                        label={navButtonProps.label}
                        targetUrl={navButtonProps.targetUrl}
                        icon={navButtonProps.icon}
                        setNavOpened={setNavOpened}
                    />
                )}
            </nav>
            {/* spacer container */}
            <Box sx={{ flexGrow: 2 }} />
            <Box>
                <p>youtube</p>
                <p>discord</p>
                <p>copyright hehehaha moment</p>
            </Box>
        </Navbar >
    )
}

export default LayoutNavbar