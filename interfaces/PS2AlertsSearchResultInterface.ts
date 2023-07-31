import { Faction } from "../faction";
import { World } from "../world";

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
    tag?: string;
    type: 'player' | 'outfit';
    faction: Faction
    world: World
    matchScore: number;
}
