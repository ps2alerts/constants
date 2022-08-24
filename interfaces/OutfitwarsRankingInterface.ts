import {World} from '../world';
import LithaFalconOutfitWarRankingParametersInterface from './LithaFalconOutfitWarRankingParametersInterface';
import {Faction} from '../faction';

export interface OutfitwarsOutfitDataInterface {
    id: string;
    name: string;
    faction: Faction;
    world: World;
    leader: string;
    tag: string | null;
}

export interface OutfitwarsRankingInterface {
    timestamp: Date;
    round: number;
    world: World;
    outfitWarId: number;
    roundId: string;
    order: number;
    outfit: OutfitwarsOutfitDataInterface;
    rankingParameters: LithaFalconOutfitWarRankingParametersInterface;
}
