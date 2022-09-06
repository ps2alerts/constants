import {World} from '../world';
import {Faction} from '../faction';
import LithaFalconOutfitWarRankingParametersInterface from './LithaFalconOutfitWarRankingParametersInterface';

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
    startTime: Date;
    round: number;
    world: World;
    outfitWarId: number;
    roundId: string;
    order: number;
    outfit: OutfitwarsOutfitDataInterface;
    rankingParameters: LithaFalconOutfitWarRankingParametersInterface;
    instanceId: string | null;
}
