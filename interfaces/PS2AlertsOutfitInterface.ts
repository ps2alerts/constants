import {Faction} from "../faction"
import {World} from "../world"

export interface PS2AlertsOutfitInterface {
    id: string;
    name: string;
    faction: Faction;
    world: World;
    leader: string;
    tag?: string;
}
