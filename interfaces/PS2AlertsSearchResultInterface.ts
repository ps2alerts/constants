import { Faction } from "~/ps2alerts-constants/faction";
import { World } from "~/ps2alerts-constants/world";

export interface SearchCharacterInterface extends SearchResultComponentInterface {
    character: {
        id: string;
        name: string;
        faction: Faction
        world: World
        outfit?: {
            name: string;
            tag?: string;
        }
    },
}

export interface SearchOutfitInterface extends SearchResultComponentInterface {
    outfit: {
        id: string;
        name: string;
        tag?: string;
        faction: Faction
        world: World
    },
}

// Component specific data
export interface SearchResultComponentInterface {
    name: string;
    type: 'player' | 'outfit';
    faction: Faction
    world: World
    matchScore?: number;
}
