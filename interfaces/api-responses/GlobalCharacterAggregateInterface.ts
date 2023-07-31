import { PS2AlertsFactionKillDataInterface } from "../PS2AlertsFactionKillDataInterface";
import { World } from "../../world";
import { Bracket } from "../../bracket";
import { Ps2AlertsEventType } from "../../ps2AlertsEventType";
import { PS2AlertsCharacterInterface } from "../PS2AlertsCharacterInterface";
import {CombatMetricsInterface} from "../CombatMetricsInterface";

export interface GlobalCharacterAggregateInterface extends CombatMetricsInterface {
    world: World;
    bracket: Bracket;
    ps2AlertsEventType: Ps2AlertsEventType;
    searchIndexed: boolean;
    character: PS2AlertsCharacterInterface
    factionKills: PS2AlertsFactionKillDataInterface;
}
