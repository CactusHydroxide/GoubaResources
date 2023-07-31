export type HSR_Paths = 'Destruction' | 'Hunt' | 'Erudition' | 'Harmony' | 'Nihility' | 'Preservation';
export type HSR_DmgType = 'Physical' | 'Fire' | 'Ice' | 'Lightning' | 'Wind' | 'Quantum' | 'Imaginary';
export type HSR_Rarity = 'two' | 'three' | 'four' | 'five' 

export interface CharacterOverview {
    name: string;
    dmgType: HSR_DmgType;
    path: HSR_Paths
    rarity: HSR_Rarity;
    imageUrl?: string
}