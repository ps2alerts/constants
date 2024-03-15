import { World } from "../world";
import { Zone } from "../zone";
import { Ps2AlertsEventState } from "../ps2AlertsEventState";
import { Bracket } from "../bracket";
import { Ps2AlertsEventType } from "../ps2AlertsEventType";
import TerritoryResultInterface from "./TerritoryResultInterface";
import {PS2AlertsInstanceFeaturesInterface} from "./PS2AlertsInstanceFeaturesInterface";

export interface PS2AlertsTerritoryInstanceInterface {
    instanceId: string
    censusInstanceId: string
    world: World
    zone: Zone
    timeStarted: string
    timeEnded?: string | null
    censusMetagameEventType: number
    duration: number
    state: Ps2AlertsEventState
    result: TerritoryResultInterface
    bracket: Bracket
    features?: PS2AlertsInstanceFeaturesInterface
    mapVersion?: string
    latticeVersion?: string
    ps2AlertsEventType?: Ps2AlertsEventType
}
