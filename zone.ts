export enum Zone {
    INDAR = 2,
    HOSSIN = 4,
    AMERISH = 6,
    ESAMIR = 8,
    NEXUS = 10,
    // VR_TRAINING_NC = 96,
    // VR_TRAINING_TR = 97,
    // VR_TRAINING_VS = 98,
    OSHUR = 344,
}

export const zoneArray = [
    2,
    4,
    6,
    8,
    10,
    344,
];

export const zoneToWarpgateArray = new Map<Zone, number[]>([
    [Zone.INDAR, [7801, 120000, 4801]],
    [Zone.HOSSIN, [308000, 309000, 310000]],
    [Zone.AMERISH, [200000, 201000, 203000]],
    [Zone.ESAMIR, [258000, 259000, 260000]],
    [Zone.OSHUR, [400370, 400369, 400371]],
    [Zone.NEXUS, [310560, 310570]],
])


