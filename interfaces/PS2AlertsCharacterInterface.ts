import {Faction} from "../faction";
import { World } from "../world";
import {PS2AlertsOutfitInterface} from "./PS2AlertsOutfitInterface";

export interface PS2AlertsCharacterInterface {
    asp: number;
    id: string;
    name: string;
    faction: Faction;
    world: World;
    battleRank: number;
    adjustedBattleRank: number;
    outfit: PS2AlertsOutfitInterface; // Character always have an outfit, even if it's a "-- NONE --" outfit
}
