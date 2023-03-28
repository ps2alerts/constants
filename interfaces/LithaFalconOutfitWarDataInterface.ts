/* eslint-disable @typescript-eslint/naming-convention */
import LithaFalconOutfitWarRoundInterface from './LithaFalconOutfitWarRoundInterface';

export default interface LithaFalconOutfitWarDataInterface {
    outfit_war_id: string;
    world_id: string;
    outfit_war_id_join_outfit_war_rounds: LithaFalconOutfitWarRoundInterface;
}
