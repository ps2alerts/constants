import json

def sort_json(data: dict):
    data["map_hexes"] = sorted(data["map_hexes"], key=lambda value: str(value))

with open("regions-344-1.1.json") as f:
    lattices_v1 = json.load(f)

with open("regions-344-1.2.json") as f:
    lattices_v2 = json.load(f)

regions_v1 = {}
regions_v2 = {}

for region in lattices_v1["map_region_list"]:
    if "map_hexes" not in region:
        continue
    sort_json(region)
    regions_v1[region["map_region_id"]] = region

for region in lattices_v2["map_region_list"]:
    if "map_hexes" not in region:
        continue
    sort_json(region)
    regions_v2[region["map_region_id"]] = region

for region_id in regions_v1:
    if region_id not in regions_v2:
        print(f"{regions_v1[region_id]['facility_name']} not in lattice v1.2")
        continue
    for map_hex in regions_v1[region_id]["map_hexes"]:
        if map_hex not in regions_v2[region_id]["map_hexes"]:
            print(f"{regions_v1[region_id]['facility_name']} missing hex ({map_hex['x']}, {map_hex['y']}) in lattice v1.2")
            continue
        regions_v2[region_id]["map_hexes"].remove(map_hex)
    for map_hex in regions_v2[region_id]["map_hexes"]:
        print(f"{regions_v1[region_id]['facility_name']} has additional hex ({map_hex['x']}, {map_hex['y']}) in lattice v1.2")
    regions_v2.pop(region_id)

for region_id in regions_v2:
    print(f"{regions_v2[region_id]['facility_name']} added in lattice v1.2")


# def sort_file(filename: str):
#     with open(filename) as f:
#         data = json.load(f)

#     sort_json(data)

#     with open(filename, "w") as f:
#         json.dump(data, f, indent=4)

# sort_file("south_flotilla_1.1.json")
# sort_file("south_flotilla_1.2.json")

