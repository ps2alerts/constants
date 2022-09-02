export const ps2AlertsApiEndpoints = {
    // Common
    instanceEntriesInstanceFacility: '/instance-entries/{instanceId}/facility',
    instanceEntriesInstanceFacilityFacility:
        '/instance-entries/{instanceId}/facility/{facilityId}', // Yes wonky naming I know
    instanceEntriesFacilityBatch: '/instance-entries/facility/batch',

    // MetagameInstance
    instanceActive: '/instances/active',
    instances: '/instances',
    instancesInstance: '/instances/{instanceId}',

    // Outfitwars
    outfitwarsActive: '/outfit-wars/active',
    outfitwars: '/outfit-wars',
    outfitwarsList: '/outfit-wars/list',
    outfitwarsInstance: '/outfit-wars/{instanceId}',
    outfitwarsInstanceFacility: '/outfit-wars/{instanceId}/facility',
    outfitwarsInstanceFacilityFacility: '/outfit-wars/{instanceId}/facility/{facilityId}',
    outfitwarsFacilityBatch: '/outfit-wars/facility/batch',
    outfitwarsRankings: '/outfit-wars/rankings',
    outfitwarsUpdateRanking: '/outfit-wars/ranking/{outfitId}/{round}',

    // Census polyfills
    censusRegions: '/census/regions/{zone}/{version}',
};
