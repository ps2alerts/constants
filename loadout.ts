/* eslint-disable @typescript-eslint/naming-convention */
import {Faction} from './faction';

export enum Loadout {
    UNKNOWN = 0,
    NC_INFILTRATOR = 1,
    // TRIGGERED
    NC_LIGHT_ASSAULT = 3,
    NC_MEDIC = 4,
    NC_ENGINEER = 5,
    NC_HEAVY_ASSAULT = 6,
    NC_MAX = 7,

    TR_INFILTRATOR = 8,
    // Reeeeee
    TR_LIGHT_ASSAULT = 10,
    TR_MEDIC = 11,
    TR_ENGINEER = 12,
    TR_HEAVY_ASSAULT = 13,
    TR_MAX = 14,

    VS_INFILTRATOR = 15,
    // REEEEEEE
    VS_LIGHT_ASSAULT = 17,
    VS_MEDIC = 18,
    VS_ENGINEER = 19,
    VS_HEAVY_ASSAULT = 20,
    VS_MAX = 21,

    NSO_INFILTRATOR = 28,
    NSO_LIGHT_ASSAULT = 29,
    NSO_MEDIC = 30,
    NSO_ENGINEER = 31,
    NSO_HEAVY_ASSAULT = 32,
    NSO_MAX = 45,
}

export const loadoutArray = [
    0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 28, 29,
    30, 31, 32, 45,
];

export const LoadoutFaction = (loadout: Loadout | undefined): Faction => {
    if (!loadout) {
        return Faction.NONE;
    }

    switch (loadout) {
        case Loadout.NC_INFILTRATOR:
        case Loadout.NC_LIGHT_ASSAULT:
        case Loadout.NC_MEDIC:
        case Loadout.NC_ENGINEER:
        case Loadout.NC_HEAVY_ASSAULT:
        case Loadout.NC_MAX:
            return Faction.NEW_CONGLOMERATE;
        case Loadout.TR_INFILTRATOR:
        case Loadout.TR_LIGHT_ASSAULT:
        case Loadout.TR_MEDIC:
        case Loadout.TR_ENGINEER:
        case Loadout.TR_HEAVY_ASSAULT:
        case Loadout.TR_MAX:
            return Faction.TERRAN_REPUBLIC;
        case Loadout.VS_INFILTRATOR:
        case Loadout.VS_LIGHT_ASSAULT:
        case Loadout.VS_MEDIC:
        case Loadout.VS_ENGINEER:
        case Loadout.VS_HEAVY_ASSAULT:
        case Loadout.VS_MAX:
            return Faction.VANU_SOVEREIGNTY;
        case Loadout.NSO_INFILTRATOR:
        case Loadout.NSO_LIGHT_ASSAULT:
        case Loadout.NSO_MEDIC:
        case Loadout.NSO_ENGINEER:
        case Loadout.NSO_HEAVY_ASSAULT:
        case Loadout.NSO_MAX:
            return Faction.NS_OPERATIVES;
    }
};

export const LoadoutName = (loadout: Loadout | undefined): string => {
    if (!loadout) {
        return 'UNKNOWN';
    }

    switch (loadout) {
        case Loadout.NC_INFILTRATOR:
            return 'NC Infiltrator';
        case Loadout.TR_INFILTRATOR:
            return 'TR Infiltrator';
        case Loadout.VS_INFILTRATOR:
            return 'VS Infiltrator';
        case Loadout.NSO_INFILTRATOR:
            return 'NSO Infiltrator';
        case Loadout.NC_LIGHT_ASSAULT:
            return 'NC Light Assault';
        case Loadout.TR_LIGHT_ASSAULT:
            return 'TR Light Assault';
        case Loadout.VS_LIGHT_ASSAULT:
            return 'VS Light Assault';
        case Loadout.NSO_LIGHT_ASSAULT:
            return 'NSO Light Assault';
        case Loadout.NC_MEDIC:
            return 'NC Medic';
        case Loadout.TR_MEDIC:
            return 'TR Medic';
        case Loadout.VS_MEDIC:
            return 'VS Medic';
        case Loadout.NSO_MEDIC:
            return 'NSO Medic';
        case Loadout.NC_ENGINEER:
            return 'NC Engineer';
        case Loadout.TR_ENGINEER:
            return 'TR Engineer';
        case Loadout.VS_ENGINEER:
            return 'VS Engineer';
        case Loadout.NSO_ENGINEER:
            return 'NSO Engineer';
        case Loadout.NC_HEAVY_ASSAULT:
            return 'NC Heavy Assault';
        case Loadout.TR_HEAVY_ASSAULT:
            return 'TR Heavy Assault';
        case Loadout.VS_HEAVY_ASSAULT:
            return 'VS Heavy Assault';
        case Loadout.NSO_HEAVY_ASSAULT:
            return 'NSO Heavy Assault';
        case Loadout.NC_MAX:
            return 'NC MAX';
        case Loadout.TR_MAX:
            return 'TR MAX';
        case Loadout.VS_MAX:
            return 'VS MAX';
        case Loadout.NSO_MAX:
            return 'NSO MAX';
    }
};
