ServerEvents.recipes(event => {

    event.custom({
        type: 'creatoriocore:reaction',
        fluid_inputs: [{ id: 'rubberworks:resin', amount: 250 }, { id: 'minecraft:water', amount: 1000 }],
        item_results: [{ id: 'minecraft:resin_clump' }],
        duration: 200,
        heat: 'blazing'
    })
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'minecraft:sand' }, { item: 'minecraft:gravel' }, { item: 'tfmg:limesand' }],
        fluid_inputs: [{ id: 'minecraft:water', amount: 250 }],
        fluid_results: [{ id: 'tfmg:liquid_concrete', amount: 1000 }],
        duration: 200
    })
    event.shaped('create:brown_toolbox', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:cogwheel',
        B: 'create:brass_sheet',
        C: 'minecraft:trapped_chest',
        D: 'minecraft:leather'
    })
    event.shaped('tfmg:fireproof_bricks', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:weak_putty',
        B: 'tfmg:fireproof_brick',
        C: 'minecraft:resin_brick'
    })

    event.shaped('createvintageneoforged:spring_coiling_machine_wheel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'create:andesite_alloy',
        B: 'tfmg:cast_iron_block'
    })
    event.shaped('create:steam_engine', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:precision_mechanism',
        B: 'create:shaft',
        C: 'minecraft:copper_block'
    })
    event.shaped('creatoriocore:ink_pearl_seeds', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:ink_sac',
        B: 'farmersdelight:cabbage_seeds'
    })
    event.recipes.farmersdelight.cutting(
        'minecraft:pale_oak_log',
        '#minecraft:axes',
        [
            'minecraft:stripped_pale_oak_log',
            'farmersdelight:tree_bark'
        ],
        'minecraft:item.axe.strip'
    )
    event.shaped('minecraft:shulker_shell', [
        'AAA',
        'A A'
    ], {
        A: 'creatoriocore:fired_ceramic_plate'
    })
    event.shaped('minecraft:dragon_head', [
        'ABA',
        'CDC',
        'CBC'
    ], {
        A: 'minecraft:ender_eye',
        B: 'minecraft:shulker_shell',
        C: 'minecraft:nautilus_shell',
        D: 'minecraft:crying_obsidian'
    })
    event.shaped('createadditionallogistics:package_accelerator', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'create:cardboard_block',
        B: 'create:precision_mechanism',
        C: 'create:brass_casing',
        D: 'create_connected:control_chip'
    })
    event.shaped('4x dndesires:omni_gearbox', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'create_connected:control_chip',
        B: 'create:gearbox',
        C: 'create:vertical_gearbox',
        D: 'create:brass_casing'

    })
    // Ink Pearl → 50/50 warm or cool pigment
    event.recipes.create.crushing([
        CreateItem.of('creatoriocore:warm_ink_pigment', 0.5),
        CreateItem.of('creatoriocore:cool_ink_pigment', 0.5)
    ], 'creatoriocore:ink_pearls')

    // Warm pigment → 7 warm-ish dyes
    event.recipes.create.crushing([
        CreateItem.of('minecraft:red_dye', 0.143),
        CreateItem.of('minecraft:orange_dye', 0.143),
        CreateItem.of('minecraft:yellow_dye', 0.143),
        CreateItem.of('minecraft:pink_dye', 0.143),
        CreateItem.of('minecraft:magenta_dye', 0.143),
        CreateItem.of('minecraft:brown_dye', 0.143),
        CreateItem.of('minecraft:white_dye', 0.143)
    ], 'creatoriocore:warm_ink_pigment')

    // Cool pigment → 7 cool-ish dyes  
    event.recipes.create.crushing([
        CreateItem.of('minecraft:blue_dye', 0.143),
        CreateItem.of('minecraft:light_blue_dye', 0.143),
        CreateItem.of('minecraft:cyan_dye', 0.143),
        CreateItem.of('minecraft:purple_dye', 0.143),
        CreateItem.of('minecraft:green_dye', 0.143),
        CreateItem.of('minecraft:lime_dye', 0.143),
        CreateItem.of('minecraft:gray_dye', 0.143)
    ], 'creatoriocore:cool_ink_pigment')
    event.recipes.tfmg.casting('tfmg:steel_ingot', Fluid.of('tfmg:molten_steel', 144)).processingTime(600)
    event.recipes.create.mixing(Fluid.of('creatoriocore:royal_ink', 1000), ['creatoriocore:lapis_redstone_mixture', Fluid.of('creatoriocore:high_quality_ink', 1000)]).heated()
    event.recipes.create.mixing(Item.of('creatoriocore:lapis_redstone_mixture', 2), ['minecraft:redstone', 'creatoriocore:lapis_dust'])
    event.recipes.create.compacting(Fluid.of('creatoriocore:high_quality_ink', 1000), ['creatoriocore:pure_ink_pearl', Fluid.of('minecraft:water', 1000)]).heated()
    event.recipes.create.compacting(Item.of('minecraft:deepslate', 4), ['minecraft:blackstone', 'minecraft:sand', 'minecraft:gravel', Fluid.of('minecraft:lava', 250)])
    event.recipes.create.haunting(Item.of('minecraft:dragon_breath', 4), 'minecraft:potion[minecraft:potion_contents={potion:"minecraft:long_strength"}]')
    event.recipes.create.deploying('2x creatoriocore:andesite_casing_modular_boards', [Ingredient.of('#minecraft:wooden_slabs'), 'create:andesite_alloy'])
    event.recipes.create.compacting('creatoriocore:fired_ceramic_plate', ['creatoriocore:fireclay_kaolin_blend', 'creatoriocore:insulated_cypherwire']).superheated()
    event.smoking('createdeco:industrial_iron_ingot', 'minecraft:iron_ingot')
    event.recipes.create.cutting(Item.of('supplementaries:lapis_bricks', 4), 'minecraft:lapis_block')
    event.recipes.create.crushing('creatoriocore:coal_dust', 'minecraft:coal')
    event.recipes.create.crushing(CreateItem.of('minecraft:blaze_powder', 0.15), 'create:scoria')
    event.recipes.create.mixing(Fluid.of('creatoriocore:molten_lapis', 1000), 'minecraft:lapis_lazuli').superheated()
    event.smelting('tfmg:fireproof_brick', 'creatoriocore:fireclay_kaolin_blend')
    event.recipes.create.mixing(Item.of('creatoriocore:fireclay_kaolin_blend', 2), ['creatoriocore:kaolin_clay', 'tfmg:fireclay_ball'])
    event.recipes.create.mixing('creatoriocore:kaolin_clay', ['creatoriocore:sintered_flint', 'minecraft:clay_ball', 'create:cinder_flour'])
    event.recipes.create.pressing(Item.of('minecraft:raw_copper', 4), 'creatoriocore:compacted_copper_ore_geode')
    event.recipes.create.pressing(Item.of('minecraft:raw_iron', 4), 'creatoriocore:compacted_iron_ore_geode')
    event.recipes.create.pressing(Item.of('create:raw_zinc', 4), 'creatoriocore:compacted_zinc_ore_geode')
    event.recipes.create.pressing(Item.of('minecraft:raw_gold', 4), 'creatoriocore:compacted_gold_ore_geode')
    event.recipes.create.pressing(Item.of('minecraft:redstone', 16), 'creatoriocore:compacted_redstone_ore_geode')
    event.recipes.create.pressing(Item.of('tfmg:raw_lead', 4), 'creatoriocore:compacted_lead_ore_geode')
    event.recipes.create.pressing(Item.of('minecraft:diamond', 4), 'creatoriocore:compacted_diamond_ore_geode')
    event.recipes.create.pressing(Item.of('tfmg:raw_nickel', 4), 'creatoriocore:compacted_nickel_ore_geode')
    event.recipes.create.pressing(Item.of('minecraft:emerald', 4), 'creatoriocore:compacted_emerald_ore_geode')
    event.recipes.create.mixing(Item.of('creatoriocore:bronze_ingot', 2), ['creatoriocore:crumbling_copper', 'creatoriocore:crumbling_tin']).heated()
    event.recipes.create.pressing(Item.of('minecraft:lapis_lazuli', 8), 'creatoriocore:compacted_lapis_ore_geode')
    event.recipes.create.crushing(Item.of('creatoriocore:crumbling_tin', 2), 'create:crushed_raw_tin')
    event.recipes.create.crushing(Item.of('create:crushed_raw_tin', 2), 'creatoriocore:raw_tin')
    event.recipes.create.mixing(Item.of('creatoriocore:invar_ingot', 3), [Item.of('creatoriocore:crumbling_iron', 2), 'creatoriocore:crumbling_nickel']).heated()
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'creatoriocore:destabilized_gravitite_dust' }, { item: 'creatoriocore:destabilized_gravitite_dust' }, { item: 'creatoriocore:destabilized_gravitite_dust' }, { item: 'aether:zanite_gemstone' }],
        item_results: [{ id: 'creatoriocore:gravitite_crystal' }],
        duration: 200,
        heat: 'blazing'
    })
    event.shaped('creatoriocore:vat_blaze_burner', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'creatoriocore:reaction_vat_casing',
        B: 'create:blaze_burner'
    })
    event.shaped('creatoriocore:gantry_foundation', [
        'ABA',
        'ABA',
        'CCC'
    ], {
        A: 'creatoriocore:brass_casing_modular_board',
        B: 'create:content_observer',
        C: 'creatoriocore:gantry_hub'
    })
    event.shaped('creatoriocore:gantry_hub', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'create:fluid_tank',
        B: 'create:precision_mechanism',
        C: 'create:item_vault',
        D: 'create:electron_tube'
    })
    event.shaped('creatoriocore:gantry_drive', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'create:cogwheel',
        B: 'creatoriocore:gantry_frame'
    })
    event.shaped('4x creatoriocore:gantry_frame', [
        'AAA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:andesite_alloy_braces',
        B: 'creatoriocore:andesite_casing_internals',
        C: 'tfmg:cast_iron_frame'
    })
    event.shaped('creatoriocore:reaction_vat_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:andesite_casing_modular_boards',
        B: 'creatoriocore:andesite_alloy_braces',
        C: 'dndecor:industrial_plating_block'
    })
    event.shaped('creatoriocore:vat_blaze_burner_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:brass_braces',
        B: 'minecraft:blaze_rod',
        C: 'dndecor:industrial_plating_block'
    })

    event.recipes.createvintageneoforged.vibrating('creatoriocore:silicon_dust', 'minecraft:quartz')
    event.recipes.createvintageneoforged.coiling('creatoriocore:drawn_quartz_string', 'minecraft:quartz')
    event.recipes.createvintageneoforged.turning('creatoriocore:primitive_assembly_component', 'create:andesite_alloy').processingTime(40)
    event.recipes.createvintageneoforged.coiling('creatoriocore:bronze_rod', 'creatoriocore:bronze_ingot')
    event.recipes.createvintageneoforged.coiling('creatoriocore:invar_rod', 'creatoriocore:invar_ingot')
    event.recipes.createvintageneoforged.turning('creatoriocore:bronze_gear', 'creatoriocore:bronze_plate')
    event.recipes.createvintageneoforged.turning('creatoriocore:iron_gear', 'create:iron_sheet')
    event.recipes.createvintageneoforged.turning('creatoriocore:invar_gear', 'creatoriocore:invar_plate')
    event.recipes.create.pressing('creatoriocore:invar_plate', 'creatoriocore:invar_ingot')
    event.recipes.create.pressing('creatoriocore:bronze_plate', 'creatoriocore:bronze_ingot')
    event.custom({
        type: 'creatoriocore:reaction',
        ingredients: [{ item: 'creatoriocore:drawn_quartz_string' }, { item: 'creatoriocore:drawn_quartz_string' }, { item: 'creatoriocore:drawn_quartz_string' }, { item: 'creatoriocore:drawn_quartz_string' }],
        fluid_inputs: [{ id: 'rubberworks:resin', amount: 1000 }],
        item_results: [{ id: 'creatoriocore:insulated_cypherwire' }],
        duration: 200,
        heat: 'searing'
    })
    event.shaped('creatoriocore:copper_casing_internals', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:copper_sheet',
        B: 'creatoriocore:copper_braces',
        C: 'minecraft:copper_ingot'
    })



    event.recipes.create.cutting(Item.of('creatoriocore:copper_braces', 4), 'minecraft:copper_ingot')
    event.shaped('6x creatoriocore:copper_braces', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'create:copper_sheet',
        B: 'minecraft:copper_ingot'
    })
    event.shaped('4x create:copper_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:copper_braces',
        B: 'create:andesite_casing',
        C: 'creatoriocore:copper_casing_internals'
    })
    // Night Vision -> Hot Cinderfuel
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { item: 'minecraft:dried_kelp' },
            { item: 'minecraft:egg' },
            { type: 'neoforge:components', fluids: 'create:potion', components: { 'minecraft:potion_contents': { potion: 'minecraft:night_vision' } }, amount: 1000 }
        ],
        results: [{ id: 'creatoriocore:fuel_hot', amount: 1000 }]
    })

    // Swiftness -> Blazing Cinderfuel
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { item: 'minecraft:glow_berries' },
            { item: 'minecraft:sweet_berries' },
            { type: 'neoforge:components', fluids: 'create:potion', components: { 'minecraft:potion_contents': { potion: 'minecraft:swiftness' } }, amount: 1000 }
        ],
        results: [{ id: 'creatoriocore:fuel_blazing', amount: 1000 }]
    })

    // Fire Resistance -> Searing Cinderfuel
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { item: 'someassemblyrequired:tomato_slices' },
            { item: 'farmersdelight:pumpkin_slice' },
            { type: 'neoforge:components', fluids: 'create:potion', components: { 'minecraft:potion_contents': { potion: 'minecraft:fire_resistance' } }, amount: 1000 }
        ],
        results: [{ id: 'creatoriocore:fuel_searing', amount: 1000 }]
    })
    event.shaped('creatoriocore:foundry_frame', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'tfmg:cast_iron_sheet',
        B: 'create:brass_casing'
    })
    event.shaped('creatoriocore:foundry_blaze', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'dndecor:dark_metal_block',
        B: 'create:blaze_cake',
        C: 'create:blaze_burner'
    })
    event.shaped('creatoriocore:refractory_casing', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'tfmg:cast_iron_sheet',
        B: 'tfmg:fireproof_bricks'
    })
    event.recipes.create.sequenced_assembly(
        'creatoriocore:bronze_gear_assembly',
        'creatoriocore:bronze_gear',
        [
            event.recipes.create.deploying('creatoriocore:bronze_gear', ['creatoriocore:bronze_gear', 'creatoriocore:bronze_gear']),
            event.recipes.create.deploying('creatoriocore:bronze_gear', ['creatoriocore:bronze_gear', 'creatoriocore:bronze_gear']),
            event.recipes.create.deploying('creatoriocore:bronze_gear', ['creatoriocore:bronze_gear', 'creatoriocore:invar_rod']),
            event.recipes.create.deploying('creatoriocore:bronze_gear', ['creatoriocore:bronze_gear', 'creatoriocore:bronze_gear']),]
    ).transitionalItem('creatoriocore:bronze_gear')
    event.recipes.create.sequenced_assembly(
        'create_connected:control_chip',
        'create:golden_sheet',
        [
            event.recipes.create.deploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'creatoriocore:silicon_chips']),
            event.recipes.create.deploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'create:electron_tube']),
            event.recipes.create.deploying('create_connected:incomplete_control_chip', ['create_connected:incomplete_control_chip', 'creatoriocore:brass_logic_core'])
        ]
    ).transitionalItem('create_connected:incomplete_control_chip')
    event.recipes.create.sequenced_assembly(
        'creatoriocore:cypherwire_spool',
        'createvintageneoforged:iron_rod',
        [
            event.recipes.create.deploying('createvintageneoforged:iron_rod', ['createvintageneoforged:iron_rod', 'creatoriocore:insulated_cypherwire']),
            event.recipes.create.deploying('createvintageneoforged:iron_rod', ['createvintageneoforged:iron_rod', 'creatoriocore:insulated_cypherwire']),
            event.recipes.create.deploying('createvintageneoforged:iron_rod', ['createvintageneoforged:iron_rod', 'creatoriocore:insulated_cypherwire']),
            event.recipes.create.deploying('createvintageneoforged:iron_rod', ['createvintageneoforged:iron_rod', 'creatoriocore:insulated_cypherwire'])
        ]
    ).transitionalItem('createvintageneoforged:iron_rod').loops(4)
    event.recipes.create.sequenced_assembly(
        'creatoriocore:silicon_boule',
        'tfmg:silicon_ingot',
        [
            event.recipes.create.filling('tfmg:silicon_ingot', ['tfmg:silicon_ingot', Fluid.of('tfmg:liquid_silicon', 1000)]),
            event.recipes.create.filling('tfmg:silicon_ingot', ['tfmg:silicon_ingot', Fluid.of('tfmg:liquid_silicon', 1000)]),
            event.recipes.create.filling('tfmg:silicon_ingot', ['tfmg:silicon_ingot', Fluid.of('tfmg:liquid_silicon', 1000)]),
            event.recipes.create.filling('tfmg:silicon_ingot', ['tfmg:silicon_ingot', Fluid.of('tfmg:liquid_silicon', 1000)])
        ]
    ).transitionalItem('tfmg:silicon_ingot').loops(2)


    event.recipes.create.sequenced_assembly(
        'create:precision_mechanism',
        'creatoriocore:primitive_assembly_component',
        [
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:golden_sheet']),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget']),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:gold_nugget'])
        ]
    ).transitionalItem('create:incomplete_precision_mechanism').loops(4)
    event.recipes.create.sequenced_assembly(
        'create:railway_casing',
        'create:brass_casing',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_railway_casing', ['creatoriocore:incomplete_railway_casing', 'create:brass_sheet']),
            event.recipes.create.deploying('creatoriocore:incomplete_railway_casing', ['creatoriocore:incomplete_railway_casing', 'creatoriocore:bronze_plate']),
            event.recipes.create.deploying('creatoriocore:incomplete_railway_casing', ['creatoriocore:incomplete_railway_casing', 'creatoriocore:invar_plate']),
            event.recipes.create.deploying('creatoriocore:incomplete_railway_casing', ['creatoriocore:incomplete_railway_casing', 'create:sturdy_sheet']),
            event.recipes.create.pressing('creatoriocore:incomplete_railway_casing', 'creatoriocore:incomplete_railway_casing')
        ]
    ).transitionalItem('creatoriocore:incomplete_railway_casing')
    event.recipes.create.sequenced_assembly(
        'creatoriocore:royal_papyrus_sheet',
        'minecraft:paper',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_royal_papyrus_sheet', ['creatoriocore:incomplete_royal_papyrus_sheet', 'farmersdelight:canvas']),
            event.recipes.create.deploying('creatoriocore:incomplete_royal_papyrus_sheet', ['creatoriocore:incomplete_royal_papyrus_sheet', 'farmersdelight:straw']),
            event.recipes.create.deploying('creatoriocore:incomplete_royal_papyrus_sheet', ['creatoriocore:incomplete_royal_papyrus_sheet', 'minecraft:paper'])
        ]
    ).transitionalItem('creatoriocore:incomplete_royal_papyrus_sheet').loops(8)

    event.recipes.create.sequenced_assembly(
        'creatoriocore:recordkeepers_scroll',
        'creatoriocore:royal_papyrus_sheet',
        [
            event.recipes.create.filling('creatoriocore:incomplete_recordkeepers_scroll', ['creatoriocore:incomplete_recordkeepers_scroll', Fluid.of('creatoriocore:royal_ink', 250)]),
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_scroll', ['creatoriocore:incomplete_recordkeepers_scroll', 'creatoriocore:royal_papyrus_sheet']),
            event.recipes.create.filling('creatoriocore:incomplete_recordkeepers_scroll', ['creatoriocore:incomplete_recordkeepers_scroll', Fluid.of('creatoriocore:high_quality_ink', 1000)]),
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_scroll', ['creatoriocore:incomplete_recordkeepers_scroll', 'creatoriocore:royal_papyrus_sheet']),
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_scroll', ['creatoriocore:incomplete_recordkeepers_scroll', 'creatoriocore:royal_papyrus_sheet']),
            event.recipes.create.pressing('creatoriocore:incomplete_recordkeepers_scroll', 'creatoriocore:incomplete_recordkeepers_scroll')
        ]
    ).transitionalItem('creatoriocore:incomplete_recordkeepers_scroll').loops(4)
    event.recipes.create.sequenced_assembly(
        'creatoriocore:recordkeepers_grand_scroll_archive',
        'creatoriocore:invar_rod',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_grand_scroll_archive', ['creatoriocore:incomplete_recordkeepers_grand_scroll_archive', 'creatoriocore:recordkeepers_scroll']),
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_grand_scroll_archive', ['creatoriocore:incomplete_recordkeepers_grand_scroll_archive', 'creatoriocore:recordkeepers_scroll']),
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_grand_scroll_archive', ['creatoriocore:incomplete_recordkeepers_grand_scroll_archive', 'creatoriocore:recordkeepers_scroll']),
            event.recipes.create.deploying('creatoriocore:incomplete_recordkeepers_grand_scroll_archive', ['creatoriocore:incomplete_recordkeepers_grand_scroll_archive', 'creatoriocore:recordkeepers_scroll'])
        ]
    ).transitionalItem('creatoriocore:incomplete_recordkeepers_grand_scroll_archive').loops(4)



    event.custom({
        type: 'creatoriocore:crogiolo',
        ingredients: [{ item: 'creatoriocore:silicon_dust' }],
        stages: [{ tier: 'hot', duration: 600 }, { tier: 'blazing', duration: 600 }],
        results: [{ id: 'tfmg:liquid_silicon', amount: 250 }]
    })
})
