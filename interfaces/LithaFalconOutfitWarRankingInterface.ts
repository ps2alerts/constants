import { Faction } from "../faction";
import LithaFalconOutfitWarRankingParametersInterface from "./LithaFalconOutfitWarRankingParametersInterface";

export default interface LithaFalconOutfitWarRankingInterface {
    round_id: string,
    outfit_id: string,
    faction_id: Faction,
    order: number,
    ranking_parameters: LithaFalconOutfitWarRankingParametersInterface
}