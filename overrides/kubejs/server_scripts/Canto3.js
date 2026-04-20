// ENABLE WHEN CANTO 3 RELEASES
ServerEvents.recipes(event => {
    event.recipes.create.item_application(
        'tfmg:steel_casing',
        ['creatoriocore:cypherwire_housing', 'tfmg:heavy_plate']
    )
    event.recipes.create.item_application(
        'creatoriocore:cypherwire_housing',
        ['tfmg:hardened_planks', 'creatoriocore:cypherwire_spool']
    )
    event.shaped('creatoriocore:induction_magnet', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'tfmg:heavy_plate',
        B: 'tfmg:nickel_ingot',
        C: 'minecraft:redstone_block',
        D: 'tfmg:steel_casing'
    })


    event.shaped('create_new_age:generator_coil', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:copper_block',
        B: 'tfmg:steel_block',
        C: 'creatoriocore:extremely_precise_mechanism'
    })
    event.shaped('tfmg:steel_distillation_controller', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:electron_tube',
        B: 'create_connected:control_chip',
        C: 'tfmg:lead_sheet',
        D: 'tfmg:industrial_pipe',
        E: 'tfmg:steel_mechanism',
        F: 'tfmg:heavy_machinery_casing'
    })
    event.shaped('tfmg:pumpjack_crank', [
        'A A',
        'BCB',
        'DED'
    ], {
        A: 'tfmg:rebar',
        B: 'tfmg:heavy_plate',
        C: 'tfmg:steel_mechanism',
        D: 'create_connected:control_chip',
        E: 'tfmg:heavy_machinery_casing'
    })
    event.shaped('tfmg:industrial_mixer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create_connected:control_chip',
        B: 'create:shaft',
        C: 'tfmg:steel_mechanism',
        D: 'tfmg:heavy_machinery_casing',
        E: 'tfmg:screw',
        F: 'tfmg:large_steel_cogwheel'
    })
    event.shaped('creatoriocore:transformer_hv_ehv', [
        'ABC',
        'ABC',
        'DDD'
    ], {
        A: 'creatoriocore:wire_steel',
        B: 'tfmg:steel_mechanism',
        C: 'creatoriocore:wire_aluminium',
        D: 'tfmg:steel_casing'
    })
    event.shaped('creatoriocore:transformer_mv_hv', [
        'ABC',
        'ABC',
        'DDD'
    ], {
        A: 'creatoriocore:wire_gold',
        B: 'tfmg:steel_mechanism',
        C: 'creatoriocore:wire_steel',
        D: 'tfmg:steel_casing'
    })
    event.shaped('creatoriocore:transformer_lv_mv', [
        'ABC',
        'ABC',
        'DDD'
    ], {
        A: 'creatoriocore:wire_copper',
        B: 'tfmg:steel_mechanism',
        C: 'creatoriocore:wire_gold',
        D: 'tfmg:steel_casing'
    })
    event.shaped('creatoriocore:connector_lv', [
        ' A ',
        'ABA',
        ' B '
    ], {
        A: 'create:copper_sheet',
        B: 'minecraft:terracotta'
    })
    event.shaped('creatoriocore:connector_mv', [
        ' A ',
        'ABA',
        ' B '
    ], {
        A: 'create:golden_sheet',
        B: 'minecraft:terracotta'
    })
    event.shaped('creatoriocore:connector_hv', [
        ' A ',
        'ABA',
        ' B '
    ], {
        A: 'tfmg:heavy_plate',
        B: 'minecraft:terracotta'
    })
    event.shaped('creatoriocore:connector_ehv', [
        ' A ',
        'ABA',
        ' B '
    ], {
        A: 'tfmg:aluminum_sheet',
        B: 'minecraft:terracotta'
    })
    event.shaped('creatoriocore:levitite_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:bronze_gear_assembly',
        B: 'aeronautics:levitite',
        C: 'minecraft:netherite_block'
    })
    event.recipes.create.cutting(Item.of('creatoriocore:soul_stained_steel_cut_plate', 4), 'malum:soul_stained_steel_plating')
    event.shaped('creatoriocore:soul_steel_casing', [
        'ABC',
        'DED',
        'CBA'
    ], {
        A: 'creatoriocore:soul_stained_steel_corner_welded_reinforcement',
        B: 'creatoriocore:soul_stained_steel_square_beam',
        C: 'creatoriocore:soul_steel_casing_modular_board',
        D: 'creatoriocore:soul_stained_steel_casing_internals',
        E: 'tfmg:hardened_planks'
    })
    event.recipes.createvintageneoforged.turning(Item.of('creatoriocore:soul_stained_steel_braces', 1), 'malum:soul_stained_steel_ingot')
    event.recipes.creatoriocore.welding({
        inputs: [{ item: 'creatoriocore:soul_stained_steel_braces' }, { item: 'creatoriocore:soul_stained_steel_corner_welded_reinforcement' }, { item: 'creatoriocore:soul_stained_steel_braces' }],
        result: { id: 'creatoriocore:soul_stained_steel_casing_internals', count: 1 },
        duration: 200
    })
    event.recipes.creatoriocore.welding({
        inputs: [{ item: 'tfmg:hardened_planks' }, { item: 'creatoriocore:soul_stained_steel_corner_welded_reinforcement' }, { item: 'creatoriocore:soul_stained_steel_braces' }],
        result: { id: 'creatoriocore:soul_steel_casing_modular_board', count: 1 },
        duration: 200
    })
    event.recipes.creatoriocore.welding({
        inputs: [{ item: 'creatoriocore:soul_stained_steel_cut_plate' }, { item: 'creatoriocore:soul_stained_steel_cut_plate' }, { item: 'creatoriocore:soul_stained_steel_rivet' }],
        result: { id: 'creatoriocore:soul_stained_steel_corner_welded_reinforcement', count: 1 },
        duration: 200
    })
    event.recipes.creatoriocore.welding({
        inputs: [{ item: 'creatoriocore:copper_cut_plate' }, { item: 'creatoriocore:copper_cut_plate' }, { item: 'creatoriocore:copper_rivet' }],
        result: { id: 'creatoriocore:copper_corner_welded_reinforcement', count: 1 },
        duration: 200
    })
    event.recipes.creatoriocore.welding({
        inputs: [{ item: 'creatoriocore:brass_cut_plate' }, { item: 'creatoriocore:brass_cut_plate' }, { item: 'creatoriocore:brass_rivet' }],
        result: { id: 'creatoriocore:brass_corner_welded_reinforcement', count: 1 },
        duration: 200
    })
    event.recipes.create.cutting(Item.of('creatoriocore:copper_rivet', 4), 'creatoriocore:copper_braces')
    event.recipes.create.cutting(Item.of('creatoriocore:soul_stained_steel_rivet', 4), 'creatoriocore:soul_stained_steel_braces')
    event.recipes.create.cutting(Item.of('creatoriocore:brass_rivet', 4), 'creatoriocore:brass_braces')
    event.recipes.createvintageneoforged.turning('creatoriocore:soul_stained_steel_square_beam', 'malum:soul_stained_steel_ingot')
    event.recipes.createvintageneoforged.turning('creatoriocore:copper_square_beam', 'minecraft:copper_ingot')
    event.recipes.createvintageneoforged.turning('creatoriocore:brass_square_beam', 'create:brass_ingot')
    event.recipes.createvintageneoforged.coiling('creatoriocore:wire_copper', 'create:copper_sheet')
    event.recipes.createvintageneoforged.coiling('creatoriocore:wire_gold', 'create:golden_sheet')
    event.recipes.createvintageneoforged.coiling('creatoriocore:wire_steel', 'tfmg:heavy_plate')
    event.recipes.createvintageneoforged.coiling('creatoriocore:wire_aluminium', 'tfmg:aluminum_sheet')
    event.recipes.create.sequenced_assembly(
        'tfmg:circuit_board',
        'tfmg:etched_circuit_board',
        [
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'creatoriocore:silicon_chips']),
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:transistor_item']),
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'creatoriocore:silicon_chips'])
        ]
    ).transitionalItem('tfmg:unfinished_circuit_board').loops(4)
    event.recipes.create.crushing(CreateItem.of('minecraft:ancient_debris', 0.015), 'minecraft:red_nether_bricks')
    event.recipes.create.cutting(Item.of('creatoriocore:silicon_wafer', 4), 'creatoriocore:silicon_boule')
    event.recipes.create.cutting(Item.of('creatoriocore:silicon_strips', 4), 'creatoriocore:silicon_wafer')
    event.recipes.create.cutting(Item.of('creatoriocore:silicon_chips', 4), 'creatoriocore:silicon_strips')
    event.recipes.create.cutting(Item.of('creatoriocore:andesite_alloy_braces', 4), 'create:shaft')
    event.recipes.create.pressing('malum:soul_stained_steel_plating', 'malum:soul_stained_steel_ingot')
    event.recipes.create.mixing('malum:soul_stained_steel_ingot', ['tfmg:copper_sulfate', 'minecraft:dragon_breath', 'tfmg:steel_ingot', Fluid.of('creatoriocore:molten_lapis', 1000)]).superheated()
    event.recipes.create.mixing('creatoriocore:high_quality_coke_iron_blend', ['creatoriocore:sifted_iron', 'tfmg:coal_coke_dust', 'create_aquatic_ambitions:calcium_rich_powder']).superheated()
    event.recipes.create.pressing(Item.of('rubberworks:rubber_sheet', 8), 'tfmg:rubber_sheet')
    event.shapeless('creatoriocore:steel_repackager', 'creatoriocore:steel_packager')
    event.shapeless('creatoriocore:steel_packager', 'creatoriocore:steel_repackager')
    event.shaped('2x creatoriocore:entangled_repackager', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'creatoriocore:cypherwire_spool',
        B: 'minecraft:ender_eye',
        C: 'create:repackager',
        D: 'create_connected:control_chip'
    })
    event.shaped('creatoriocore:steel_frogport', [
        'ABA',
        'CDC',
        'BEB'
    ], {
        A: 'tfmg:rubber_sheet',
        B: 'tfmg:steel_ingot',
        C: 'create_connected:control_chip',
        D: 'create:package_frogport',
        E: 'create:precision_mechanism'
    })
    event.shaped('creatoriocore:steel_packager', [
        ' A ',
        'ABA',
        'CAC'
    ], {
        A: 'tfmg:steel_ingot',
        B: 'create:cardboard_block',
        C: 'create_connected:control_chip'
    })



    event.recipes.create.compacting('deep_aether:bio_crystal', ['farmersdelight:organic_compost', 'minecraft:sand', Fluid.of('create_mechanical_chicken:chicken_nutrient', 250)]).heated()
    event.recipes.create.compacting(Item.of('minecraft:coal', 4), 'deep_aether:bio_crystal').superheated()


    event.custom({
        type: 'creatoriocore:crogiolo',
        ingredients: [{ item: 'creatoriocore:high_quality_coke_iron_blend' }, { item: 'tfmg:coal_coke_dust' }, { item: 'create_aquatic_ambitions:calcium_rich_powder' }, { item: 'minecraft:dragon_breath' }],
        stages: [{ tier: 'warm', duration: 600 }, { tier: 'hot', duration: 600 }, { tier: 'blazing', duration: 600 }, { tier: 'searing', duration: 600 }],
        results: [{ id: 'tfmg:molten_steel', amount: 288 }, { id: 'tfmg:molten_slag', amount: 288 }],
        slag_ratio: 0.1
    })



    event.custom({
        type: 'create_dragons_plus:ending',
        ingredients: [
            { item: 'minecraft:heart_of_the_sea' }
        ],
        results: [
            { id: 'minecraft:nether_star' }
        ]
    })
    event.recipes.create.sequenced_assembly(
        'creatoriocore:extremely_precise_mechanism',
        'create:precision_mechanism',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_extremely_precise_mechanism', ['creatoriocore:incomplete_extremely_precise_mechanism', 'malum:soul_stained_steel_plating']),
            event.recipes.create.deploying('creatoriocore:incomplete_extremely_precise_mechanism', ['creatoriocore:incomplete_extremely_precise_mechanism', 'tfmg:steel_cogwheel']),
            event.recipes.create.deploying('creatoriocore:incomplete_extremely_precise_mechanism', ['creatoriocore:incomplete_extremely_precise_mechanism', 'createdeco:netherite_nugget']),
            event.recipes.create.deploying('creatoriocore:incomplete_extremely_precise_mechanism', ['creatoriocore:incomplete_extremely_precise_mechanism', 'tfmg:steel_mechanism'])
        ]
    ).transitionalItem('creatoriocore:incomplete_extremely_precise_mechanism')
    event.recipes.create.sequenced_assembly(
        'creatoriocore:advanced_electron_tube',
        'create:electron_tube',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_advanced_electron_tube', ['creatoriocore:incomplete_advanced_electron_tube', 'create_rns:polished_resonant_amethyst']),
            event.recipes.create.filling('creatoriocore:incomplete_advanced_electron_tube', ['creatoriocore:incomplete_advanced_electron_tube', Fluid.of('creatoriocore:molten_lapis', 1000)]),
            event.recipes.create.deploying('creatoriocore:incomplete_advanced_electron_tube', ['creatoriocore:incomplete_advanced_electron_tube', 'create_rns:polished_resonant_amethyst']),
            event.recipes.create.filling('creatoriocore:incomplete_advanced_electron_tube', ['creatoriocore:incomplete_advanced_electron_tube', Fluid.of('creatoriocore:molten_lapis', 1000)])
        ]
    ).transitionalItem('creatoriocore:incomplete_advanced_electron_tube')


})
