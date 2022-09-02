import {CensusEnvironment} from '../censusEnvironments';

const getCensusBaseUrl = (
    serviceId: string,
    environment: CensusEnvironment,
): string => {
    return `https://census.daybreakgames.com/s:${serviceId}/get/${environment}`;
};

export default getCensusBaseUrl;
