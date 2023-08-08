import { Group, Skeleton, Stack } from "@mantine/core"

const LoadingSkeleton = () => {
    return (
        <>
            <Group>
                <Skeleton height={'250'} circle />
                <Stack sx={{ flexGrow: 2 }} miw='250px'>
                    <Skeleton width={'55%'} height={40} />
                    <Skeleton width={'100%'} height={25} />
                    <Skeleton width={'100%'} height={25} />
                    <Skeleton width={'100%'} height={25} />
                </Stack>
            </Group>
            <Group h={400} mt='lg'>
                <Skeleton h='100%' w='100%' />
            </Group>
        </>
    )
}

export default LoadingSkeleton