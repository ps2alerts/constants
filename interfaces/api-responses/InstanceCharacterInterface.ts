import {CombatMetricsInterface} from "../CombatMetricsInterface";
import {Ps2AlertsEventType} from "../../ps2AlertsEventType";
import {PS2AlertsCharacterInterface} from "../PS2AlertsCharacterInterface";

export interface InstanceCharacterInterface extends CombatMetricsInterface {
    instance: string;
    ps2AlertsEventType: Ps2AlertsEventType;
    character: PS2AlertsCharacterInterface
}
