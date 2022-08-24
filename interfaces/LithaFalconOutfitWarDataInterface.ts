import { WorldPC } from "../world";
import LithaFalconOutfitWarRoundInterface from "./LithaFalconOutfitWarRoundInterface";

export default interface LithaFalconOutfitWarDataInterface {
    outfit_war_id: number,
    world_id: WorldPC,
    outfit_war_id_join_outfit_war_rounds: LithaFalconOutfitWarRoundInterface
}