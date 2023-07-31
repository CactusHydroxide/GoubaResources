import { AppShell, useMantineTheme } from "@mantine/core"
import { useState } from "react"
import LayoutNavbar from "./LayoutNavbar";
import LayoutHeader from "./LayoutHeader";
import PageRoutes from "../../routes";
import LayoutPageContainer from "./LayoutPageContainer";


const Layout = () => {
    const [navOpened, setNavOpened] = useState(false);
    const theme = useMantineTheme();

    return (<AppShell
        styles={{
            main: {
                background: theme.colors.dark[6]
            },
        }}
        navbarOffsetBreakpoint="sm"
        navbar={
            <LayoutNavbar navOpened={navOpened} />
        }
        header={
            <LayoutHeader navOpened={navOpened} setNavOpened={setNavOpened} />
        }
    >
        <LayoutPageContainer>
            <PageRoutes />
        </LayoutPageContainer>
    </AppShell>)
}

export default Layout