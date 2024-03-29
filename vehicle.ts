// Here's a full list: https://discord.com/channels/251073753759481856/451032574538547201/935355006071218236
// Thanks Cooltrain!

export enum Vehicle {
    FLASH = 1,
    SUNDERER = 2,
    LIGHTNING = 3,
    MAGRIDER = 4,
    VANGUARD = 5,
    PROWLER = 6,
    SCYTHE = 7,
    REAVER = 8,
    MOSQUITO = 9,
    LIBERATOR = 10,
    GALAXY = 11,
    HARASSER = 12,
    DROP_POD = 13,
    VALKYRIE = 14,
    ANT = 15,
    XIPHOS_AP_PHALANX_TURRET = 100,
    MANA_AP_TURRET = 101,
    MANA_AV_TURRET = 102,
    SPITFIRE_TURRET = 103, // Used
    SPITFIRE_AUTO_TURRET = 104, // Not used
    SPITFIRE_AA_TURRET = 105, // Not used
    ASPIS_AA_PHALANX_TURRET = 150, // Base AA Turret
    SPEAR_AV_PHALANX_TURRET = 151, // Base AV Turret
    SPEAR_AV_PHALANX_TOWER = 160, // Player Base AV Turret
    ASPIS_AA_PHALANX_TOWER = 161, // Player Base AA Turret
    XIPHOS_AP_TOWER = 162, // Player Base AI Turret
    GLAIVE_IPC = 163, // Player Base Artillery
    FLASH_2 = 1001, // Unused, but has entries in alert data??
    SUNDERER_2 = 1002, // Unused, but has entries in alert data??
    MAGRIDER_2 = 1004, // Unused, but has entries in alert data??
    VANGUARD_2 = 1005, // Unused, but has entries in alert data??
    SCYTHE_2 = 1007, // Unused, but has entries in alert data??
    REAVER_2 = 1008, // Unused, but has entries in alert data??
    MOSQUITO_2 = 1009, // Unused, but has entries in alert data??
    LIBERATOR_2 = 1010, // Unused, but has entries in alert data??
    GALAXY_2 = 1011, // Unused, but has entries in alert data??
    PHOENIX_MISSILE = 1012,
    RECON_DRONE = 1013, // Never implemented
    VANGUARD_3 = 1105, // Wut
    OBSERVER_CAMERA = 1337,
    AUTO_TURRET = 2003, // Never implemented
    SPEAR_AV_PHALANX_TURRET_2 = 2006, // Player Base AV turret (not tower)
    COLOSSUS = 2007,
    DROP_POD_2 = 2008, // Drop Pod Mrk 2? o.O
    XIPHOS_AP_TURRET = 2009, // Wat?
    FLASH_XS_1 = 2010, // Outfit Merit Flash
    FORWARD_STATION = 2011, // Not used also... o.O
    BASTION = 2019, // API says it's a Light Aircraft... LUL
    FLAIL = 2021, // Flail player base
    JAVELIN = 2033, // Currently used
    PUMPKIN_PATCH = 2036, // Pumpkins are vehicles apparently
    DELIVERER_PROTOTYPE = 2039, // Spawn ANT, USED
    WASP_PROTOTYPE = 2040, // Cortium Valkyrie, USED
    MOSQUITO_INTERCEPTOR = 2122, // Bastion Mosquito
    REAVER_INTERCEPTOR = 2123, // Bastion Reaver
    SCYTHE_INTERCEPTOR = 2124, // Bastion Scythe
    JAVELIN_2 = 2125, // Wat
    SPITFIRE_AUTO_TURRET_2 = 2128, // Duplicate or reworked version?
    JAVELIN_3 = 2129, // Wat x2
    RECLAIMED_SUNDERER = 2130,
    RECLAIMED_GALAXY = 2131,
    RECLAIMED_VALKYRIE = 2132,
    RECLAIMED_MAGRIDER = 2133,
    RECLAIMED_VANGUARD = 2134,
    RECLAIMED_PROWLER = 2135,
    DERVISH = 2136,
    CHIMERA = 2137,
    DELIVERER_PROTOTYPE_2 = 2139, // Spawn ANT, UNUSED
    LODESTAR_PROTOTYPE_2 = 2140, // Spawn Galaxy, UNUSED - NOT IN API
    WASP_PROTOTYPE_2 = 2141, // Currently used (Cortium Valkyrie)
    CORSAIR = 2142,
    EXODUS_PPC = 2143, // Big Pew Pew on the Oshur carriers
}

export const vehicleArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 101, 102, 103, 104, 105,
    150, 151, 160, 161, 162, 163, 1013, 2006, 2007, 2008, 2009, 2010, 2011, 2019,
    2021, 2013, 2036, 2039, 2040, 2122, 2123, 2124, 2125, 2128, 2129, 2130, 2131,
    2132, 2133, 2134, 2135, 2137, 2142, 2143,
];
