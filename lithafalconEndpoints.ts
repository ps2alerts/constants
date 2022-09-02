export const lithafalconEndpoints = {
    itemId: '/item',
    outfitWarRankings: '/outfit_war?c:show=outfit_war_id,world_id&c:join=outfit_war_rounds^show:primary_round_id(outfit_war_ranking^on:primary_round_id^to:round_id)',
    outfitWarMatches: '/outfit_war_match',
};

export const lithafalconCensusUrl = 'https://census.lithafalcon.cc/get/ps2';
