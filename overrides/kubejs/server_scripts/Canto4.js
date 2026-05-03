
ServerEvents.recipes(event => {


    event.recipes.create.sequenced_assembly(
        'creatoriocore:highly_advanced_electron_tube',
        'creatoriocore:advanced_electron_tube',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'tfmg:circuit_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'creatoriocore:silicon_chips']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'tfmg:circuit_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'creatoriocore:silicon_chips'])
        ]
    ).transitionalItem('creatoriocore:incomplete_highly_advanced_electron_tube')
    event.recipes.create.cutting(Item.of('creatoriocore:aluminium_cut_plate', 4), 'tfmg:aluminum_sheet')
    event.recipes.createvintageneoforged.turning('creatoriocore:aluminium_braces', 'tfmg:aluminum_ingot')
    event.custom({
        type: 'creatoriocore:crogiolo',
        ingredients: [{ item: 'creatoriocore:metallic_succulent' }, { item: 'creatoriocore:honeyrose' }, { item: 'creatoriocore:midnight_moondrop' }, { item: 'create:crushed_raw_nickel' }],
        stages: [{ tier: 'white_hot', duration: 600 }],
        results: [{ id: 'creatoriocore:impure_molten_titanium', amount: 1152 }]
    })
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'minecraft:rotten_flesh' }, { item: 'farmersdelight:rotten_tomato' }, { item: 'minecraft:poisonous_potato' }],
        fluid_inputs: [{ id: 'ratatouille:melon_juice_fluid', amount: 500 }],
        item_results: [Item.of('malum:rotting_essence', 4)],
        duration: 200,
        heat: 'blazing'
    })
    event.recipes.create.sequenced_assembly(
        'creatoriocore:living_mechanism',
        'tfmg:steel_mechanism',
        [
            event.recipes.create.deploying('creatoriocore:living_mechanism', ['creatoriocore:living_mechanism', 'malum:imitation_flesh']),
            event.recipes.create.deploying('creatoriocore:living_mechanism', ['creatoriocore:living_mechanism', 'tfmg:aluminum_cogwheel']),
            event.recipes.create.deploying('creatoriocore:living_mechanism', ['creatoriocore:living_mechanism', 'creatoriocore:shadow_steel_sheet']),
            event.recipes.create.deploying('creatoriocore:living_mechanism', ['creatoriocore:living_mechanism', 'creatoriocore:extremely_precise_mechanism'])
        ]
    ).transitionalItem('creatoriocore:living_mechanism')
    event.recipes.create.cutting(Item.of('creatoriocore:aluminium_rivet', 4), 'creatoriocore:aluminium_braces')
    event.recipes.createvintageneoforged.turning('creatoriocore:aluminium_square_beam', 'tfmg:aluminum_ingot')
    event.recipes.creatoriocore.welding({
        inputs: [{ item: 'creatoriocore:aluminium_cut_plate' }, { item: 'creatoriocore:aluminium_cut_plate' }, { item: 'creatoriocore:aluminium_rivet' }],
        result: { id: 'creatoriocore:aluminium_corner_welded_reinforcement', count: 1 },
        duration: 200
    })
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'creatoriocore:coal_dust' }, { item: 'create_aquatic_ambitions:calcium_rich_powder' }],
        fluid_inputs: [{ id: 'creatoriocore:impure_molten_titanium', amount: 288 }],
        fluid_results: [{ id: 'creatoriocore:fluxed_molten_titanium', amount: 288 }],
        duration: 200,
        heat: 'searing'
    })
    event.recipes.create.sandpaper_polishing('malum:refined_soulstone', 'malum:raw_soulstone')
    event.custom({
        type: 'malum:spirit_infusion',
        input: { item: 'create:shadow_steel', count: 1 },
        result: { id: 'malum:umbral_spirit', count: 1 },
        spirits: [{ type: 'malum:earthen', count: 1 }, { type: 'malum:infernal', count: 1 }, { type: 'malum:aerial', count: 1 }, { type: 'malum:aqueous', count: 1 }, { type: 'malum:sacred', count: 1 }, { type: 'malum:wicked', count: 1 }, { type: 'malum:arcane', count: 1 }, { type: 'malum:eldritch', count: 1 }],
        extraInputs: [{ item: 'malum:refined_soulstone', count: 1 }, { item: 'malum:refined_soulstone', count: 1 }, { item: 'malum:refined_soulstone', count: 1 }, { item: 'malum:refined_soulstone', count: 1 }]
    })
    event.recipes.createvintageneoforged.turning('creatoriocore:cut_soulstone', 'malum:refined_soulstone')
    event.recipes.create.sequenced_assembly(
        'creatoriocore:aluminium_casing_internals',
        'creatoriocore:aluminium_braces',
        [
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'creatoriocore:aluminium_casing_internals' }, { item: 'creatoriocore:aluminium_braces' }, { item: 'creatoriocore:aluminium_corner_welded_reinforcement' }, { item: 'creatoriocore:aluminium_corner_welded_reinforcement' }], results: [{ id: 'creatoriocore:aluminium_casing_internals', count: 1 }], processingDuration: 200 }),
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'creatoriocore:aluminium_casing_internals' }, { item: 'creatoriocore:aluminium_square_beam' }, { item: 'creatoriocore:aluminium_braces' }, { item: 'creatoriocore:aluminium_braces' }], results: [{ id: 'creatoriocore:aluminium_casing_internals', count: 1 }], processingDuration: 200 }),
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'creatoriocore:aluminium_casing_internals' }], results: [{ id: 'creatoriocore:aluminium_casing_internals', count: 1 }], processingDuration: 200 })
        ]
    ).transitionalItem('creatoriocore:aluminium_casing_internals').loops(4)
    event.recipes.create.sequenced_assembly(
        'tfmg:industrial_aluminum_casing',
        'creatoriocore:aluminium_casing_internals',
        [
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'tfmg:industrial_aluminum_casing' }, { item: 'creatoriocore:aluminium_cut_plate' }, { item: 'creatoriocore:aluminium_cut_plate' }, { item: 'creatoriocore:aluminium_cut_plate' }], results: [{ id: 'tfmg:industrial_aluminum_casing', count: 1 }], processingDuration: 200 }),
            event.recipes.create.deploying('tfmg:industrial_aluminum_casing', ['tfmg:industrial_aluminum_casing', 'creatoriocore:aluminium_rivet']),
            event.recipes.create.deploying('tfmg:industrial_aluminum_casing', ['tfmg:industrial_aluminum_casing', 'tfmg:aluminum_sheet']),
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'tfmg:industrial_aluminum_casing' }, { item: 'creatoriocore:aluminium_cut_plate' }, { item: 'creatoriocore:aluminium_cut_plate' }, { item: 'creatoriocore:aluminium_cut_plate' }], results: [{ id: 'tfmg:industrial_aluminum_casing', count: 1 }], processingDuration: 200 })
        ]
    ).transitionalItem('tfmg:industrial_aluminum_casing')
    event.recipes.create.pressing('creatoriocore:radiant_alloy_sheet', 'create:refined_radiance')
    event.recipes.create.pressing('creatoriocore:shadow_steel_sheet', 'create:shadow_steel')
    event.recipes.create.mixing(Fluid.of('creatoriocore:molten_chromatic_compound', 1000), ['creatoriocore:cool_ink_pigment', 'creatoriocore:warm_ink_pigment', 'tfmg:lead_ingot', Fluid.of('aeronautics:levitite_blend', 1000)]).superheated()
    event.recipes.create.pressing(Item.of('creatoriocore:titanite_crystal', 4), 'creatoriocore:titanite_cluster')
    event.recipes.create.mixing('creatoriocore:attuned_titanite', ['creatoriocore:titanite_crystal', Fluid.of('creatoriocore:moondew', 500), Fluid.of('creatoriocore:molten_lapis', 500)]).heated()
    event.recipes.create.mixing('creatoriocore:sparkling_titanite_chunk', ['creatoriocore:titanite_crystal', Fluid.of('creatoriocore:royal_wax', 500), Fluid.of('creatoriocore:ethanol', 500)]).heated()
    event.recipes.create.mixing('create:chromatic_compound', ['createcasing:chorium_ingot', 'malum:blighted_gunk', Fluid.of('creatoriocore:molten_chromatic_compound', 500), Fluid.of('creatoriocore:royal_dye', 500)]).superheated()
    event.recipes.create.mechanical_crafting('createnuclear:reactor_controller', [
        'ABBBA',
        'BCDCB',
        'BEEEB',
        'BCFCB',
        'ABBBA'
    ], {
        A: 'createnuclear:reactor_casing',
        B: 'createvintageneoforged:netherite_sheet',
        C: 'tfmg:circuit_board',
        D: 'create:content_observer',
        E: 'tfmg:heavy_machinery_casing',
        F: 'create:item_vault'
    })
    event.recipes.create.mechanical_crafting('createnuclear:reactor_core', [
        'ABBBA',
        'BCDCB',
        'BDADB',
        'BCDCB',
        'ABBBA'
    ], {
        A: 'createnuclear:reactor_casing',
        B: 'createvintageneoforged:netherite_sheet',
        C: 'createnuclear:uranium_rod',
        D: 'creatoriocore:extremely_precise_mechanism'
    })
    event.recipes.create.mechanical_crafting('createnuclear:reactor_cooler', [
        'ABBBA',
        'BCDCB',
        'BEFEB',
        'BCDCB',
        'ABBBA'
    ], {
        A: 'createnuclear:reactor_casing',
        B: 'createvintageneoforged:netherite_sheet',
        C: 'tfmg:steel_ingot',
        D: 'createnuclear:reinforced_glass',
        E: 'minecraft:blue_ice',
        F: 'creatoriocore:extremely_precise_mechanism'
    })
    event.recipes.create.mechanical_crafting('createnuclear:reactor_frame', [
        'ABBBA',
        'BCDCB',
        'BCDCB',
        'BCDCB',
        'ABBBA'
    ], {
        A: 'createnuclear:reactor_casing',
        B: 'createvintageneoforged:netherite_sheet',
        C: 'tfmg:steel_frame',
        D: 'tfmg:steel_fluid_tank'
    })
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'create:crushed_raw_iron' }],
        fluid_inputs: [{ id: 'creatoriocore:fluxed_molten_titanium', amount: 144 }],
        fluid_results: [{ id: 'creatoriocore:titanite_slag', amount: 144 }],
        duration: 200,
        heat: 'searing'
    })
    event.recipes.createvintageneoforged.coiling('createnuclear:graphite_rod', 'createnuclear:graphene')
    event.recipes.create.sequenced_assembly(
        'createnuclear:reactor_casing',
        'dndesires:industrial_casing',
        [
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'create_new_age:incomplete_reactor_casing' }, { item: 'creatoriocore:fired_ceramic_plate' }, { item: 'create:sturdy_sheet' }, { item: 'tfmg:heavy_plate' }], results: [{ id: 'create_new_age:incomplete_reactor_casing', count: 1 }], processingDuration: 200 }),
            event.recipes.create.pressing('create_new_age:incomplete_reactor_casing', 'create_new_age:incomplete_reactor_casing'),
            event.recipes.creatoriocore.welder_step({ ingredients: [{ item: 'create_new_age:incomplete_reactor_casing' }, { item: 'creatoriocore:andesite_alloy_braces' }, { item: 'creatoriocore:andesite_alloy_braces' }, { item: 'creatoriocore:andesite_alloy_braces' }], results: [{ id: 'create_new_age:incomplete_reactor_casing', count: 1 }], processingDuration: 200 }),
            event.recipes.create.cutting('create_new_age:incomplete_reactor_casing', 'create_new_age:incomplete_reactor_casing')
        ]
    ).transitionalItem('create_new_age:incomplete_reactor_casing')
    event.recipes.create.compacting('createnuclear:graphene', ['creatoriocore:coal_dust', Fluid.of('tfmg:sulfuric_acid', 250)]).heated()
    event.custom({
        type: 'create_dragons_plus:freezing',
        ingredients: [{ item: 'deep_aether:goldenleaf_berries' }],
        results: [{ id: 'deep_aether:frozen_goldenleaf_berries' }]
    })
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }, { item: 'minecraft:cactus' }],
        fluid_inputs: [{ id: 'tfmg:sulfuric_acid', amount: 250 }, { id: 'minecraft:water', amount: 750 }],
        item_results: [Item.of('tfmg:nitrate_dust', 4)],
        duration: 200,
        heat: 'warm'
    })
    event.recipes.create.mixing(Fluid.of('createnuclear:uranium', 25), 'createnuclear:uranium_powder').superheated()
    event.recipes.create.filling('minecraft:pearlescent_froglight', ['minecraft:pink_wool', Fluid.of('dndesires:glowberry_milkshake', 250)])
    event.recipes.create.filling('minecraft:verdant_froglight', ['minecraft:lime_wool', Fluid.of('dndesires:glowberry_milkshake', 250)])
    event.recipes.create.filling('minecraft:ochre_froglight', ['minecraft:yellow_wool', Fluid.of('dndesires:glowberry_milkshake', 250)])
    event.recipes.create.mixing(Fluid.of('create:tea', 500), ['deep_aether:goldenleaf_berries', Fluid.of('minecraft:water', 250), Fluid.of('minecraft:milk', 250)]).heated()
    event.recipes.create.mixing(Fluid.of('creatoriocore:royal_dye', 1000), ['creatoriocore:warm_ink_pigment', 'creatoriocore:cool_ink_pigment', Fluid.of('supplementaries:lumisene', 1000)]).heated()
    event.recipes.create.filling('minecraft:chorus_flower', ['minecraft:pumpkin', Fluid.of('creatoriocore:royal_dye', 1000)])
    event.recipes.create.compacting('creatoriocore:titanite_cluster', Fluid.of('creatoriocore:titanite_slag', 144))
    event.custom({
        type: 'creatoriocore:crogiolo',
        ingredients: [{ item: 'creatoriocore:attuned_titanite' }, { item: 'creatoriocore:sparkling_titanite_chunk' }, { item: 'create:chromatic_compound' }],
        stages: [{ tier: 'white_hot', duration: 300 }, { tier: 'blazing', duration: 300 }, { tier: 'searing', duration: 300 }, { tier: 'white_hot', duration: 300 }, { tier: 'blazing', duration: 300 }, { tier: 'white_hot', duration: 300 }],
        results: [{ id: 'creatoriocore:molten_twilight_titanium', amount: 576 }]
    })
})

