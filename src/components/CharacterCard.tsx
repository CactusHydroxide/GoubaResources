import { Card, Image, Text, useMantineTheme } from "@mantine/core"
import { CharacterOverview } from "../definition";
import { FC } from "react";
import { rarityGradients } from "../utils/RarityGradient";

interface CharacterCardProps {
    character: CharacterOverview
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    const theme = useMantineTheme();
    const { name, imageUrl, dmgType, path, rarity } = character

    return (
        <Card w='100%' bg={theme.colors.dark[5]} radius='lg' p='0'
            onClick={() => {

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
            <Image
                src={!!imageUrl ? imageUrl : `https://cataas.com/c/s/${name}?wi=150&he=150`}
                sx={{ backgroundImage: theme.fn.gradient(rarityGradients[rarity]) }}
                withPlaceholder
                alt={name}
            />
            <Text ta='center' weight={600} fz='lg' sx={{ margin: '8px' }}>{name}</Text>
        </Card>
    )
}

export default CharacterCard