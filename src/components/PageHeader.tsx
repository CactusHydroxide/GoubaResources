import { Box } from "@mantine/core"
import { FC } from "react"
import { useLocation } from "react-router-dom"

interface PageHeaderProps {
    header: string,
    subheader?: string

}

const PageHeader: FC<PageHeaderProps> = ({ header, subheader }) => {
    const location = useLocation()
    console.log(location)

    return (
        <Box>
            <h1 style={{ margin: '0' }}>{header}</h1>
            {subheader && <h3 style={{ margin: '0' }}>{subheader}</h3>}
        </Box>
    )
}

export default PageHeader