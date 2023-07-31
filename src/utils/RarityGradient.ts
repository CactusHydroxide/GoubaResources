import { MantineGradient } from "@mantine/core"

const rarityColours = {
    two: {
        dark: "#33405f",
        light: "#3a7a77"
    },
    three: {
        dark: '#35355f',
        light: '#4276bf'
    },
    four: {
        dark: '#3f3b67',
        light: '#8858cc'
    },
    five: {
        dark: '#7b524f',
        light: '#cfa050'
    }
}

const two: MantineGradient = { from: rarityColours.two.dark, to: rarityColours.two.light, deg: 180 }
const three: MantineGradient = { from: rarityColours.three.dark, to: rarityColours.three.light, deg: 180 }
const four: MantineGradient = { from: rarityColours.four.dark, to: rarityColours.four.light, deg: 180 }
const five: MantineGradient = { from: rarityColours.five.dark, to: rarityColours.five.light, deg: 180 }

export const rarityGradients = {
    two,
    three,
    four,
    five
}

export default rarityColours 