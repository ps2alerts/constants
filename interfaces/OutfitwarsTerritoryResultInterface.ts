import TerritoryResultInterface from './TerritoryResultInterface';
import {Team} from '../outfitwars/team';

export interface OutfitwarsTerritoryResultInterface extends TerritoryResultInterface {
    victor: Team;
    team1: number;
    team2: number;
}
