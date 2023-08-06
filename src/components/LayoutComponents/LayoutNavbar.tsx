import { Box, Navbar } from "@mantine/core"
import { FC } from "react"
import { IconCards, IconHome, IconTicket, IconUserCircle } from '@tabler/icons-react';
import NavButton, { NavButtonProps } from "../NavButton";

interface LayoutNavbarProps {
    navOpened: boolean
}

const LayoutNavbar: FC<LayoutNavbarProps> = ({ navOpened }) => {
    const navList: NavButtonProps[] = [
        {
            label: 'Home',
            targetUrl: '/',
            icon: <IconHome size='24px' />
        },
        {
            label: 'Characters',
            targetUrl: '/Characters',
            icon: <IconUserCircle size='24px' />
        },
        {
            label: 'Light Cones',
            targetUrl: '/LightCones',
            icon: <IconCards size='24px' />
        },
        {
            label: 'Wishes',
            targetUrl: '/Wishes',
            icon: <IconTicket size='24px' />
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