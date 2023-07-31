import { World } from "../../world";
import { Bracket } from "../../bracket";
import { Ps2AlertsEventType } from "../../ps2AlertsEventType";
import { PS2AlertsOutfitInterface } from "../PS2AlertsOutfitInterface";
import { PS2AlertsFactionKillDataInterface } from "../PS2AlertsFactionKillDataInterface";
import {CombatMetricsInterface} from "../CombatMetricsInterface";

export interface GlobalOutfitAggregateInterface extends CombatMetricsInterface {
    world: World;
    bracket: Bracket;
    captures?: number;
    ps2AlertsEventType: Ps2AlertsEventType;
    outfit: PS2AlertsOutfitInterface;
    factionKills?: PS2AlertsFactionKillDataInterface
}
