import {Zone} from './zone'
import {Faction} from './faction'

export interface MetagameDetailsInterface {
    title: string
    zone: Zone
    duration: number
    triggeringFaction: Faction
    unstable: boolean // Whether the zone has links disabled, known as Underpowered Warpgate mode.
}

export enum MetagameEventType {
    // VS Triggered
    INDAR_ENLIGHTENMENT = 148,
    HOSSIN_ENLIGHTENMENT = 154,
    AMERISH_ENLIGHTENMENT = 157,
    ESAMIR_ENLIGHTENMENT = 151,
    OSHUR_ENGLIGHTENMENT = 224,

    // NC Triggered
    INDAR_LIBERATION = 149,
    HOSSIN_LIBERATION = 155,
    AMERISH_LIBERATION = 158,
    ESAMIR_LIBERATION = 152,
    OSHUR_LIBERATION = 222,

    // TR Triggered
    INDAR_SUPERIORITY = 147,
    HOSSIN_SUPERIORITY = 153,
    AMERISH_SUPERIORITY = 156,
    ESAMIR_SUPERIORITY = 150,
    OSHUR_SUPERIORITY = 223,

    // Current Generation Unstable Meltdowns
    NC_INDAR_UNSTABLE_MELTDOWN = 179,
    NC_HOSSIN_UNSTABLE_MELTDOWN = 177,
    NC_AMERISH_UNSTABLE_MELTDOWN = 178,
    NC_ESAMIR_UNSTABLE_MELTDOWN = 176,

    VS_INDAR_UNSTABLE_MELTDOWN = 189,
    VS_HOSSIN_UNSTABLE_MELTDOWN = 187,
    VS_AMERISH_UNSTABLE_MELTDOWN = 188,
    VS_ESAMIR_UNSTABLE_MELTDOWN = 186,

    TR_INDAR_UNSTABLE_MELTDOWN = 193,
    TR_HOSSIN_UNSTABLE_MELTDOWN = 191,
    TR_AMERISH_UNSTABLE_MELTDOWN = 192,
    TR_ESAMIR_UNSTABLE_MELTDOWN = 190,

    // High pop alerts
    AMERISH_HIGH_POP_CONQUEST = 211,
    ESAMIR_HIGH_POP_CONQUEST = 212,
    HOSSIN_HIGH_POP_CONQUEST = 213,
    INDAR_HIGH_POP_CONQUEST = 214,
    OSHUR_HIGH_POP_CONQUEST = 226,
}

export const metagameEventTypeArray = [
    147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 176, 177, 178,
    179, 186, 187, 188, 189, 190, 191, 192, 193, 211, 212, 213, 214, 222, 223,
    224, 226,
]
