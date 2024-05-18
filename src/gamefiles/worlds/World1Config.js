const calcBackPositionX = (position) => {
    return position + 960;
};
const calcBackPositionY = (position) => {
    return position + 540;
};

const KEYS = {
    KEY_HIMEL: "HimmelLvL1",
    KEY_WOLKEN: "WolkenLvL1",
    KEY_BODEN: "BodenLvL1",
    KEY_SURFACESEA: "SurfaceSea",
    KEY_MIDDLESEA: "Middelsea",
    KEY_DEEPSEA: "DeepSea",
    KEY_EXTREAMDEEPSEA: "ExtreamDeepSea",
    KEY_WAVEFRONT: "WaveFrontLvL1",
    KEY_WAVEBACK: "WaveBackLvl1",
    KEY_SEAWEED: "SeaWeed",
    KEY_BUBBLESENV: "BubblesEnv",
    KEY_RIFFONE: "Riff1",
};

const World1Config = {
    backgroundPositions: [
        //First Tile
        {x: calcBackPositionX(0), y: 0, key: KEYS.KEY_HIMEL, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 0.3, depth: 2},
        {x: calcBackPositionX(0), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 0.3, depth: 2},
        {x: calcBackPositionX(0), y: calcBackPositionY(540 * 5), key: KEYS.KEY_DEEPSEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540 * 5), key: KEYS.KEY_DEEPSEA, alpha: 0.3, depth: 2},

        //Second Tile
        {x: calcBackPositionX(1920), y: 0, key: KEYS.KEY_HIMEL, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 0.3, depth: 2},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 0.3, depth: 2},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540 * 5), key: KEYS.KEY_DEEPSEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540 * 5), key: KEYS.KEY_DEEPSEA, alpha: 0.3, depth: 2},

    ],
    groundPositions: [
        {x: calcBackPositionX(0), y: 1068 * 3, key: KEYS.KEY_BODEN},
        {x: calcBackPositionX(1920), y: 1068 * 3, key: KEYS.KEY_BODEN},
    ],
    wolkenPosition: [
        {x: calcBackPositionX(0), y: 0, key: KEYS.KEY_WOLKEN, depth: 0},
        {x: calcBackPositionX(1920), y: 0, key: KEYS.KEY_WOLKEN, depth: 0},
        {x: calcBackPositionX(1920 * 2), y: 0, key: KEYS.KEY_WOLKEN, depth: 0},
    ],
    waveFrontPositions: [
        {x: calcBackPositionX(-1920), y: 535, key: KEYS.KEY_WAVEFRONT, depth: 2, scale: 1},
        {x: calcBackPositionX(0), y: 535, key: KEYS.KEY_WAVEFRONT, depth: 2, scale: 1},
        {x: calcBackPositionX(1920), y: 535, key: KEYS.KEY_WAVEFRONT, depth: 2, scale: 1},
    ],
    waveBackPositions: [
        {x: calcBackPositionX(0), y: 537, key: KEYS.KEY_WAVEBACK, depth: 2, scale: 1},
        {x: calcBackPositionX(1920), y: 537, key: KEYS.KEY_WAVEBACK, depth: 2, scale: 1},
        {x: calcBackPositionX(1920*2), y: 537, key: KEYS.KEY_WAVEBACK, depth: 2, scale: 1},
    ],
    seaWeedPosition:[
        {x: 450, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 300},
        {x: 480, y: 1065 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 510, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1500},
        {x: 880, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 3000},
        {x: 900, y: 1062 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 500},
        {x: 920, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 930, y: 1063 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1400},
        {x: 950, y: 1064 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1800},
        {x: 980, y: 1061 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1000},
        {x: 1300, y: 1061 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 1320, y: 1064 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 300},
        {x: 1340, y: 1062 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 1350, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1400},
        {x: 1460, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1000},
        {x: 1470, y: 1062 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 400},
        {x: 1520, y: 1065 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 600},
        {x: 1530, y: 1063 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1500},
        {x: 1540, y: 1061 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 3000},
        {x: 2250, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 300},
        {x: 2280, y: 1065 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 2310, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1500},
        {x: 2880, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 3000},
        {x: 2900, y: 1062 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 500},
        {x: 2920, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 2930, y: 1063 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1400},
        {x: 2950, y: 1064 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1800},
        {x: 2980, y: 1061 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1000},
        {x: 3500, y: 1061 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 3520, y: 1064 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 300},
        {x: 3540, y: 1062 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 800},
        {x: 3550, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1400},
        {x: 3660, y: 1060 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1000},
        {x: 3670, y: 1062 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 400},
        {x: 3720, y: 1065 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 600},
        {x: 3730, y: 1063 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 1500},
        {x: 3740, y: 1061 *3, key: KEYS.KEY_SEAWEED, depth: 2, scale: 1, delay: 3000},
    ],
    riff1Positions: [
        {x: 550, y: 1050 *3, key: KEYS.KEY_RIFFONE, depth: 2, scale:2},
        {x: 1550, y: 1050 *3, key: KEYS.KEY_RIFFONE, depth: 2, scale:2},
        {x: 3850, y: 1050 *4, key: KEYS.KEY_RIFFONE, depth: 2, scale:2},
    ],
    colliderPositionsRiffCircles: [
        //Left Riff
        {x: -430, y: 1050, width: 0, height: 0},
        {x: -310, y: 1350, width: 0, height: 0},
        {x: -355, y: 1550, width: 0, height: 0},
        {x: -325, y: 1690, width: 0, height: 0},
        {x: -155, y: 2100, width: 0, height: 0},
        {x: -585, y: 2750, width: 0, height: 0},
        
        //secondRiff
        {x: 750, y: 1000, width: 0, height: 0},
        {x: 670, y: 1330, width: 0, height: 0},
        {x: 800, y: 1530, width: 0, height: 0},
        {x: 860, y: 1830, width: 0, height: 0},
        {x: 720, y: 2000, width: 0, height: 0},
        {x: 640, y: 2100, width: 0, height: 0},
        {x: 760, y: 2100, width: 0, height: 0},

        //third Riff
        {x: 1875, y: 1040, width: 0, height: 0},
        {x: 2130, y: 1020, width: 0, height: 0},
        {x: 2030, y: 1100, width: 0, height: 0},
        {x: 1960, y: 1450, width: 0, height: 0},
    ]
}

export {
    KEYS,
    World1Config,
    calcBackPositionX,
}