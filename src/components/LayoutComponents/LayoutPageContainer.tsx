import { Box } from "@mantine/core";
import { FC, ReactNode } from "react";

const LayoutPageContainer: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box maw={1280} m={{ base: 'auto', lg: 0 }}>
            {children}
        </Box>
    )
}

export default LayoutPageContainer