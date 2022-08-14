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
    outfitwarsInstance: '/outfit-wars/{instanceId}',
    outfitwarsFacilityControl: '/outfit-wars/{instanceId}/facility-control',

    // Census polyfills
    censusRegions: '/census/regions/{zone}/{version}',
};
