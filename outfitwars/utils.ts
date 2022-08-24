import {Phase} from './phase';

export function getOutfitWarRound(date: Date): number {
    return date < new Date(2022, 9, 4, 5, 30) ? 1 // Qualifiers
        : date < new Date(2022, 9, 11, 5, 30) ? 2
        : date < new Date(2022, 9, 18, 5, 30) ? 3
        : date < new Date(2022, 9, 25, 5, 30) ? 4
        : date < new Date(2022, 10, 2, 5, 30) ? 5 // Playoff Ro8
        : date < new Date(2022, 10, 9, 5, 30) ? 6 // Playoff Ro4
        : 7; // Championship
}

export function getOutfitWarPhase(round: number): Phase {
    return round < 5 ? Phase.QUALIFIERS
        : round < 7 ? Phase.PLAYOFFS
        : Phase.CHAMPIONSHIPS;
}
