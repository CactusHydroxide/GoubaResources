import { Box } from "@mantine/core"

const DevOnly_Breakpoint = () => {
    return <Box sx={{ height: '50px', width: '50px' }} bg={{ xs: 'blue', sm: 'grape', md: 'green', lg: 'yellow', xl: 'red' }}></Box>
}

export default DevOnly_Breakpoint