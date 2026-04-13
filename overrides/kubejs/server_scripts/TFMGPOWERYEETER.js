let tfmgElectricalBlocks = [
    'tfmg:generator',
    'tfmg:creative_generator',
    'tfmg:rotor',
    'tfmg:stator',
    'tfmg:electric_motor',
    'tfmg:cable_connector',
    'tfmg:glass_cable_insulator',
    'tfmg:cable_tube',
    'tfmg:concrete_encased_cable_tube',
    'tfmg:diagonal_cable_block',
    'tfmg:copycat_cable_block',
    'tfmg:copycat_cable_base',
    'tfmg:copper_cable_hub',
    'tfmg:aluminum_cable_hub',
    'tfmg:brass_cable_hub',
    'tfmg:steel_cable_hub',
    'tfmg:steel_casing_cable_hub',
    'tfmg:heavy_cable_hub',
    'tfmg:transformer',
    'tfmg:large_transformer',
    'tfmg:voltage_observer',
    'tfmg:electrical_switch',
    'tfmg:large_switch',
    'tfmg:accumulator',
    'tfmg:converter',
    'tfmg:resistor',
    'tfmg:light_bulb',
    'tfmg:neon_tube',
    'tfmg:traffic_light',
    'tfmg:segmented_display',
]

let tfmgElectricalItems = [
    'tfmg:copper_wire',
    'tfmg:aluminum_wire',
    'tfmg:constantan_wire',
    'tfmg:glass_insulator_segment',
    'tfmg:unfinished_electric_motor',
    'tfmg:unfinished_generator',
    'tfmg:unfinished_insulator',
    'tfmg:unfinished_resistor',
    'tfmg:unfired_insulator',
]

let allElectrical = tfmgElectricalBlocks.concat(tfmgElectricalItems)

ServerEvents.recipes(event => {
    allElectrical.forEach(item => {
        event.remove({ output: item })
    })
})

ServerEvents.tags('item', event => {
    allElectrical.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })
})
