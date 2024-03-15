import {CombatMetricsInterface} from "../CombatMetricsInterface";
import {Ps2AlertsEventType} from "../../ps2AlertsEventType";
import {PS2AlertsCharacterInterface} from "../PS2AlertsCharacterInterface";
import {PS2AlertsTerritoryInstanceInterface} from "../PS2AlertsTerritoryInstanceInterface";

export interface XPerMinuteInterface {
    deathsPerMinute: number
    headshotsPerMinute: number
    killsPerMinute: number
    suicidesPerMinute: number
    teamKilledPerMinute: number
    teamKillsPerMinute: number
}

export interface InstanceCharacterInterface extends CombatMetricsInterface {
    instance: string
    ps2AlertsEventType: Ps2AlertsEventType
    character: PS2AlertsCharacterInterface
    instanceDetails?: PS2AlertsTerritoryInstanceInterface
    xPerMinutes?: XPerMinuteInterface
    [key: string]: any
}
