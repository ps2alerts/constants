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
]);

export const zoneLatticeVersionsMap = new Map<Zone, string[]>([
    [Zone.INDAR, ["1.0", "1.1"]],
    [Zone.HOSSIN, ["1.0", "1.1"]],
    [Zone.AMERISH, ["1.0", "1.1"]],
    [Zone.ESAMIR, ["1.0", "1.1"]],
    [Zone.OSHUR, ["1.0", "1.1", "1.2"]],
    [Zone.NEXUS, ["1.0"]],
])

// Returns the current version of the lattice for a given zone
export const getZoneLatticeVersion = ((zone: Zone, date: Date): string => {
    // Currently Nexus only has one version
    if (zone === Zone.NEXUS) {
        return '1.0';
    }

    const ctfRelease = new Date('2022-11-17 15:00:00'); // The time is random guess for now
    const constructionRelease = new Date('2023-05-10 15:00:00'); // This date is a guess - needs to be updated for when the update is actually released

    if(date > constructionRelease && zone === Zone.OSHUR) {
        return '1.3';
    } else if (date > ctfRelease) {
        switch (zone) {
            case Zone.INDAR:
            case Zone.AMERISH:
            case Zone.HOSSIN:
            case Zone.ESAMIR:
                return '1.1';
            case Zone.OSHUR:
                return '1.2';
        }
    }

    return '1.0'
})
