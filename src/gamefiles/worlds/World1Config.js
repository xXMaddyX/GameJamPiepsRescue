const calcBackPositionX = (position) => {
    return position + 960;
};
const calcBackPositionY = (position) => {
    return position + 540;
};

const KEYS = {
    KEY_HIMEL: "HimmelLvL1",
    KEY_BODEN: "BodenLvL1",
    KEY_SURFACESEA: "SurfaceSea",
    KEY_MIDDLESEA: "Middelsea",
    KEY_DEEPSEA: "DeepSea",
    KEY_EXTREAMDEEPSEA: "ExtreamDeepSea",
    KEY_SEAWEED: "SeaWeed"
};

const World1Config = {
    backgroundPositions: [
        //First Tile
        {x: calcBackPositionX(0), y: 0, key: KEYS.KEY_HIMEL, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 0.3, depth: 2},
        {x: calcBackPositionX(0), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(0), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 0.3, depth: 2},

        //Second Tile
        {x: calcBackPositionX(1920), y: 0, key: KEYS.KEY_HIMEL, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540), key: KEYS.KEY_SURFACESEA, alpha: 0.3, depth: 2},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 1, depth: 0},
        {x: calcBackPositionX(1920), y: calcBackPositionY(540 * 3), key: KEYS.KEY_MIDDLESEA, alpha: 0.3, depth: 2},
    ],
    groundPositions: [
        {x: calcBackPositionX(0), y: 1060 * 2, key: KEYS.KEY_BODEN},
        {x: calcBackPositionX(1920), y: 1060 * 2, key: KEYS.KEY_BODEN},
    ]
}

export {
    KEYS,
    World1Config,
}