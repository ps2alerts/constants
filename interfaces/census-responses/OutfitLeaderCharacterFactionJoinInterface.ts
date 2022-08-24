/* eslint-disable @typescript-eslint/naming-convention */
interface OutfitWithLeaderFaction {
    outfit_id: string;
    name: string;
    alias: string;
    leader_character_id: string;
    leader: {
        faction_id: string;
    };
}

export interface OutfitLeaderCharacterFactionJoinInterface {
    outfit_list: OutfitWithLeaderFaction[];
    returned: number;
    error?: string;
}
