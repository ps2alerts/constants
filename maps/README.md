# Lattice data

Since Census has been unreliable at times, we take the data directly out of Census and have pasted it into a file where it is parsed and sent to the TerritoryCalculatorAbstract.

To update this data, visit https://census.daybreakgames.com/get/ps2:v2/map_region?zone_id=2&c:limit=10000&c:show=map_region_id,facility_id,facility_name,facility_type_id,location_x,location_z&c:join=facility_link%5Eon:facility_id%5Eto:facility_id_a%5Elist:1%5Eshow:facility_id_b%5Einject_at:facility_links(map_region%5Eon:facility_id_b%5Eto:facility_id%5Eshow:map_region_id%5Einject_at:map_region)&c:join=map_hex%5Elist:1%5Einject_at:map_hexes%5Eshow:x%27y and paste the content into the files in this folder by zone ID.

Alternatively, run `python3 update_maps.py` to update Amerish, Esamir, Hossin, Indar, and Oshur automatically.
