const KEYS = {
    KEY_TAUCHER: "Taucher",
    KEY_SCHATZTRUE: "Schatztrue",
};

const TrueConfig = {
    animKey: KEYS.KEY_SCHATZTRUE,
    startFrame: 0,
    endFrame: 0,
    frameRate: 0,
    repeat: -1,
};
const TruePositions = [
    {x: 1500, y: 1050 * 3, depth: 1, scale: 2},
    {x: 500, y: 1050 * 3, depth: 1, scale: 2},
    {x: 2500, y: 1050 * 3, depth: 1, scale: 2},
    {x: 800, y: 500, depth: 1, scale: 2},
    {x: 1200, y: 500, depth: 1, scale: 2},
];

const Taucher = {
    animKey: KEYS.KEY_TAUCHER,
    startFrame: 0,
    endFrame: 5,
    frameRate: 5,
    repeat: -1
};
const TaucherPositions = [
    {},
    {},
]


export {
    KEYS,
    TrueConfig,
    TruePositions,
};