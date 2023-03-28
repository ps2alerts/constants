import TerritoryResultInterface from './TerritoryResultInterface';
import {Faction} from '../faction';
import {FactionNumbersInterface} from './FactionNumbersInterface';

export interface MetagameTerritoryControlResultInterface extends TerritoryResultInterface, FactionNumbersInterface {
    draw: boolean;
    victor: Faction | null;
}
