export type HSR_Paths = 'Destruction' | 'Hunt' | 'Erudition' | 'Harmony' | 'Nihility' | 'Preservation' | 'Abundance';
export type HSR_DmgType = 'Physical' | 'Fire' | 'Ice' | 'Lightning' | 'Wind' | 'Quantum' | 'Imaginary';
export type HSR_Rarity = 'two' | 'three' | 'four' | 'five'
export type HSR_RelicType = 'planar' | 'cavern'

export interface CharacterOverview {
    name: string
    dmgType: HSR_DmgType
    path: HSR_Paths
    rarity: HSR_Rarity
    imageUrl?: string
}

export interface LightConeOverview {
    name: string
    path: HSR_Paths
    rarity: HSR_Rarity
    passive: {
        name: string
        description: string
        params: {
            min: number[],
            max: number[]
        }
    }
    hp: { min: number, max: number }
    def: { min: number, max: number }
    atk: { min: number, max: number }
    imageUrl?: string
}

interface RelicGeneric {
    name: string,
    recommended: CharacterOverview[]
    type: HSR_RelicType,
    location: string
}

interface RelicData_TwoPiece extends RelicGeneric {
    type: 'planar'
    imageUrl: {
        orb?: string
        rope?: string
    }
    setBonus: {
        two: string
    }
}

interface RelicData_FourPiece extends RelicGeneric {
    type: 'cavern'
    imageUrl: {
        head?: string
        hands?: string
        chest?: string
        boots?: string
    }
    setBonus: {
        two: string
        four: string
    }
}

export type RelicData = RelicData_TwoPiece | RelicData_FourPiece 