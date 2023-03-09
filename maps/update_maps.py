import requests
import os, re, json
from deepdiff import DeepDiff
from pprint import pprint

URL = "https://census.daybreakgames.com/get/ps2:v2/map_region?zone_id={}&c:limit=10000&c:show=map_region_id,facility_id,facility_name,facility_type_id,location_x,location_z&c:join=facility_link%5Eon:facility_id%5Eto:facility_id_a%5Elist:1%5Eshow:facility_id_b%5Einject_at:facility_links(map_region%5Eon:facility_id_b%5Eto:facility_id%5Eshow:map_region_id%5Einject_at:map_region)&c:join=map_hex%5Elist:1%5Einject_at:map_hexes%5Eshow:x%27y"

files = os.listdir()
print(files)
for zone_id in [2, 4, 6, 8, 344]:
    print(f"Updating zone {zone_id}...")
    max_version = 0
    for file in files:
        if file.startswith(f"regions-{zone_id}"):
            print(file)
            match = re.match(f"regions-{zone_id}-(\d\.\d).json", file)
            print(match)
            print(match.group(1))
            version = float(match.group(1))
            max_version = max(version, max_version)
    next_version = max_version + 0.1
    res = requests.get(URL.format(zone_id))
    if res.status_code != 200:
        print(f"Error: {res.text}")
        break
    new_data = res.json()
    with open(f"regions-{zone_id}-{max_version:.1f}.json") as old_file:
        data = json.load(old_file)
        if data == new_data:
            print(f"No update to {zone_id=} needed")
            continue
        pprint(DeepDiff(data, new_data), indent=2)

    with open(f"regions-{zone_id}-{next_version:.1f}.json", "w") as lattice_file:
        json.dump(new_data, lattice_file, indent=4)
    print(f"Zone {zone_id} updated as regions-{zone_id}-{next_version:.1f}.json")
