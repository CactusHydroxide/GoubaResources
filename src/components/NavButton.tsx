import { Button, Group, ThemeIcon, Text } from "@mantine/core"
import { FC, ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export interface NavButtonProps {
    label: string,
    targetUrl: string,
    icon: ReactNode
    disabled?: boolean
}

const NavButton: FC<NavButtonProps> = ({ label, targetUrl, icon, disabled }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const isActive = location.pathname == targetUrl
    console.log(label, disabled)
    return (
        <Button onClick={() => { navigate(targetUrl) }}
            disabled={disabled}
            styles={(theme) => ({
                root: {
                    height: 'auto',
                    width: '100%',
                    backgroundColor: isActive ? theme.colors.dark[4] : 'transparent',
                    padding: '5px',
                    marginBottom: '5px',
                    color: theme.colors.dark[0],
                    '&:hover': {
                        backgroundColor: isActive ? theme.colors.dark[4] : theme.colors.dark[6]
                    },
                    '&:disabled': { backgroundColor: theme.colors.dark[7], color: theme.colors.dark[3] }
                },
                label: {
                    width: '100%',
                    justifyContent: 'flex-start',
                    fontSize: '1.1em'
                }
            })
            }
        >
            <Group>
                <ThemeIcon radius="xl" size="lg" variant="outlined"  >
                    {icon}
                </ThemeIcon>
                <Text>{label}</Text>
            </Group>
        </Button>
    )
}

export default NavButton