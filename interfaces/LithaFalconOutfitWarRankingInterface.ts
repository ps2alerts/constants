import LithaFalconOutfitWarRankingParametersInterface from "./LithaFalconOutfitWarRankingParametersInterface";

export default interface LithaFalconOutfitWarRankingInterface {
    round_id: string,
    outfit_id: string,
    faction_id: string,
    order: string,
    ranking_parameters: LithaFalconOutfitWarRankingParametersInterface
}