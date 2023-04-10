export const lithafalconEndpoints = {
    itemId: '/item',
    outfitWarRankings: '/outfit_war?c:show=outfit_war_id,world_id&c:join=outfit_war_rounds^show:primary_round_id(outfit_war_ranking^on:primary_round_id^to:round_id)',
    outfitWarMatches: '/outfit_war_match?c:limit=1000',
    mapStateByWorldAndZone: '/map_state?c:limit=1000&world_id={world_id}&zone_id={zone_id}&is_contested=1',
};

export const lithafalconCensusUrl = 'https://census.lithafalcon.cc/get/ps2';
