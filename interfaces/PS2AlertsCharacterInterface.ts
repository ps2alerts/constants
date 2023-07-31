import {Faction} from "../faction";
import {PS2AlertsOutfitEmbedInterface} from "./PS2AlertsOutfitInterface";
import {PS2AlertsFactionKillDataInterface} from "./PS2AlertsFactionKillDataInterface";

export interface PS2AlertsCharacterInterface {
    asp: number;
    id: string;
    name: string;
    faction: Faction;
    battleRank: number;
    adjustedBattleRank: number;
    outfit?: PS2AlertsOutfitEmbedInterface;
    factionKills: PS2AlertsFactionKillDataInterface;
}
