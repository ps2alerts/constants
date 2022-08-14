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
    outfitwarsInstanceFacility: '/outfit-wars/{instanceId}/facility',
    outfitwarsInstanceFacilityFacility: '/outfit-wars/{instanceId}/facility/{facilityId}',
    outfitwarsFacilityBatch: '/outfit-wars/facility/batch',

    // Census polyfills
    censusRegions: '/census/regions/{zone}/{version}'
}
