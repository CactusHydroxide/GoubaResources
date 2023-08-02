import { Avatar, MantineNumberSize, Image, ImageProps } from "@mantine/core"
import { HSR_DmgType, HSR_Paths } from "../definition"
import { FC, MouseEventHandler } from "react"

import path_Destruction from '../Assets/PathIcons/Destruction.webp'
import path_Hunt from '../Assets/PathIcons/Hunt.webp'
import path_Abundance from '../Assets/PathIcons/Abundance.webp'
import path_Erudition from '../Assets/PathIcons/Erudition.webp'
import path_Nihility from '../Assets/PathIcons/Nihility.webp'
import path_Preservation from '../Assets/PathIcons/Preservation.webp'
import path_Harmony from '../Assets/PathIcons/Harmony.webp'
import dmgType_Physical from '../Assets/TypeIcons/Physical.webp'
import dmgType_Ice from '../Assets/TypeIcons/Ice.webp'
import dmgType_Fire from '../Assets/TypeIcons/Fire.webp'
import dmgType_Lightning from '../Assets/TypeIcons/Lightning.webp'
import dmgType_Imaginary from '../Assets/TypeIcons/Imaginary.webp'
import dmgType_Quantum from '../Assets/TypeIcons/Quantum.webp'
import dmgType_Wind from '../Assets/TypeIcons/Wind.webp'

interface PathTypeImageProps {
    icon: HSR_DmgType | HSR_Paths
    imageProps?: ImageProps & React.RefAttributes<HTMLDivElement>
}


const PathTypeImage: FC<PathTypeImageProps> = ({ icon, imageProps }) => {
    const srcObj = () => {
        switch (icon) {
            case 'Destruction':
                return path_Destruction
            case 'Hunt':
                return path_Hunt
            case 'Erudition':
                return path_Erudition
            case 'Harmony':
                return path_Harmony
            case 'Nihility':
                return path_Nihility
            case 'Preservation':
                return path_Preservation
            case 'Abundance':
                return path_Abundance
            case "Physical":
                return dmgType_Physical
            case "Fire":
                return dmgType_Fire
            case "Ice":
                return dmgType_Ice
            case "Lightning":
                return dmgType_Lightning
            case "Wind":
                return dmgType_Wind
            case "Quantum":
                return dmgType_Quantum
            case "Imaginary":
                return dmgType_Imaginary
            default:
                return null
        }
    }

    // return (<Avatar
    //     size={size}
    //     radius={radius}
    //     style={style}
    //     src={srcObj()}
    //     bg={!!bg ? bg : 'transparent'}
    //     onClick={onClick}
    // />)
    return <Image src={srcObj()} {...imageProps} />
}

export default PathTypeImage