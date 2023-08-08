import { AspectRatio, Box, Card, Image, Skeleton, Text, useMantineTheme } from "@mantine/core"
import { CharacterOverview } from "../definition";
import { FC } from "react";
import { rarityGradients } from "../utils/RarityGradient";
import { useNavigate } from "react-router-dom";
import PathTypeImage from "./PathTypeImage";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

interface CharacterCardProps {
    character: CharacterOverview
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    const theme = useMantineTheme();
    const navigate = useNavigate()
    const isSmall = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
    const [imageLoaded, imageLoadedHandler] = useDisclosure(false)
    const { name, imageUrl, dmgType, path, rarity } = character

    return (
        <Card w='100%' bg={theme.colors.dark[5]} radius='lg' p='0'
            onClick={() => {
                navigate(`${name}`)
            }}
            sx={{
                '&:hover': {
                    backgroundColor: theme.colors.dark[4],
                    cursor: 'pointer',
                    'img': {
                        filter: 'brightness(110%)'
                    }
                }
            }}>
            <Box pos='relative' >
                <AspectRatio ratio={1 / 1} >
                    <Skeleton visible={!imageLoaded}>
                        <Image
                            onLoad={() => imageLoadedHandler.open()}
                            src={!!imageUrl ? imageUrl : `https://cataas.com/c/s/${name}?wi=250&he=250`}
                            style={{ backgroundImage: theme.fn.gradient(rarityGradients[rarity]) }}
                            alt={name}
                            imageProps={
                                { loading: 'lazy', alt: name }
                            }
                        />
                    </Skeleton>
                </AspectRatio>
                <Box sx={{ position: 'absolute', right: '10px', bottom: '5px', width: isSmall ? '30px' : '24px', height: isSmall ? '30px' : '24px', borderRadius: '50%', padding: '2px' }} bg={'#262626'}>
                    <PathTypeImage icon={path} />
                </Box>
                <Box style={{ position: 'absolute', right: `calc(20px + ${isSmall ? '30px' : '24px'})`, bottom: '5px', width: isSmall ? '30px' : '24px', height: isSmall ? '30px' : '24px', borderRadius: '50%', padding: '3px' }} bg={'#262626'}>
                    <PathTypeImage icon={dmgType} />
                </Box>
            </Box>
            <Text ta='center' weight={600} fz='lg' sx={{ margin: '8px' }}>{name}</Text>
        </Card >
    )
}

export default CharacterCard