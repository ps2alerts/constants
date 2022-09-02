/* eslint-disable @typescript-eslint/prefer-literal-enum-member */
import {Faction} from '../faction';

export enum Team {
    NONE = 0,
    BLUE = Faction.NEW_CONGLOMERATE,
    RED = Faction.TERRAN_REPUBLIC,
}

export const outfitWarsTeamArray = [Team.NONE, Team.BLUE, Team.RED];
