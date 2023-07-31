import { PS2AlertsFactionKillDataInterface } from "../PS2AlertsFactionKillDataInterface";
import { World } from "../../world";
import { Bracket } from "~/ps2alerts-constants/bracket";
import { Ps2AlertsEventType } from "~/ps2alerts-constants/ps2AlertsEventType";
import { PS2AlertsCharacterInterface } from "~/ps2alerts-constants/interfaces/PS2AlertsCharacterInterface";

export interface GlobalCharacterAggregateInterface {
    world: World;
    bracket: Bracket;
    kills: number;
    deaths: number;
    teamKills: number;
    teamKilled: number;
    suicides: number;
    headshots: number;
    ps2AlertsEventType: Ps2AlertsEventType;
    searchIndexed: boolean;
    character: PS2AlertsCharacterInterface
    factionKills: PS2AlertsFactionKillDataInterface;
}