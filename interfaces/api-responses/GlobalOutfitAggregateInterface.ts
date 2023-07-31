import { World } from "../../world";
import { Bracket } from "../../bracket";
import { Ps2AlertsEventType } from "../../ps2AlertsEventType";
import { PS2AlertsOutfitInterface } from "../PS2AlertsOutfitInterface";
import { PS2AlertsFactionKillDataInterface } from "../PS2AlertsFactionKillDataInterface";

export interface GlobalOutfitAggregateInterface {
    world: World;
    bracket: Bracket;
    kills: number;
    deaths: number;
    teamKills: number;
    teamKilled: number;
    suicides: number;
    headshots: number;
    captures: number;
    ps2AlertsEventType: Ps2AlertsEventType;
    outfit: PS2AlertsOutfitInterface;
    factionKills: PS2AlertsFactionKillDataInterface
}
