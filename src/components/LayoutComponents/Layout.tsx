import { AppShell, useMantineTheme } from "@mantine/core"
import { Suspense, useState } from "react"
import LayoutNavbar from "./LayoutNavbar";
import LayoutHeader from "./LayoutHeader";
import PageRoutes from "../../routes";
import LayoutPageContainer from "./LayoutPageContainer";
import LoadingSkeleton from "../../pages/LoadingSkeleton";


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
            <Suspense fallback={<LoadingSkeleton />}>
                <PageRoutes />
            </Suspense>
        </LayoutPageContainer>
    </AppShell>)
}

export default Layout