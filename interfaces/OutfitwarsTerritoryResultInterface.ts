import TerritoryResultInterface from './TerritoryResultInterface';
import {Team} from '../outfitwars/team';

export interface OutfitwarsTerritoryResultInterface extends TerritoryResultInterface {
    victor: Team | null;
    blue: number;
    red: number;
}
