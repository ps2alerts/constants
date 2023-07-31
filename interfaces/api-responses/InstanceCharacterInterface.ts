import {CombatMetricsInterface} from "../CombatMetricsInterface";
import {Ps2AlertsEventType} from "../../ps2AlertsEventType";
import {PS2AlertsCharacterInterface} from "../PS2AlertsCharacterInterface";
import {
    PS2AlertsTerritoryInstanceInterface
} from "~/ps2alerts-constants/interfaces/PS2AlertsTerritoryInstanceInterface";

export interface InstanceCharacterInterface extends CombatMetricsInterface {
    instance: string;
    ps2AlertsEventType: Ps2AlertsEventType;
    character: PS2AlertsCharacterInterface
    instanceDetails?: PS2AlertsTerritoryInstanceInterface
}
