import {Faction} from "../faction"
import {World} from "../world"
import {Bracket} from "../bracket";
import {PS2AlertsFactionKillDataInterface} from "./PS2AlertsFactionKillDataInterface";
import {Ps2AlertsEventType} from "../ps2AlertsEventType";

// This interface is a subset of the outfit of the character missing details
export interface PS2AlertsOutfitEmbedInterface {
    id: string;
    name: string;
    faction: Faction;
    world: World;
    leader: string;
    tag?: string;
}

export interface PS2AlertsOutfitInterface {
    outfit: PS2AlertsOutfitEmbedInterface;
    world: World;
    bracket: Bracket;
    kills: number;
    deaths: number;
    teamKills: number;
    teamKilled: number;
    suicides: number;
    headshots: number;
    captures: number;
    factionKills: PS2AlertsFactionKillDataInterface;
    // factionDeaths: PS2AlertsFactionKillDataInterface; TO IMPLEMENT
    ps2alertsEventType: Ps2AlertsEventType;
}
