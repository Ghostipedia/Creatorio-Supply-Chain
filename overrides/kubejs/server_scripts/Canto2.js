ServerEvents.recipes(event => {


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
    event.recipes.tfmg.vat_machine_recipe('minecraft:resin_clump', Fluid.of('rubberworks:resin', 250)).heated()
    event.recipes.createvintageneoforged.vibrating('creatoriocore:silicon_dust', 'minecraft:quartz')
    event.recipes.createvintageneoforged.coiling('creatoriocore:drawn_quartz_string', 'minecraft:quartz')
    event.recipes.createvintageneoforged.laser_cutting('creatoriocore:primitive_assembly_component', 'create:andesite_alloy')
    event.recipes.createvintageneoforged.coiling('creatoriocore:bronze_rod', 'creatoriocore:bronze_ingot')
    event.recipes.createvintageneoforged.coiling('creatoriocore:invar_rod', 'creatoriocore:invar_ingot')
    event.recipes.createvintageneoforged.laser_cutting('creatoriocore:bronze_gear', 'creatoriocore:bronze_plate')
    event.recipes.createvintageneoforged.laser_cutting('creatoriocore:iron_gear', 'create:iron_sheet')
    event.recipes.createvintageneoforged.laser_cutting('creatoriocore:invar_gear', 'creatoriocore:invar_plate')
    event.recipes.create.pressing('creatoriocore:invar_plate', 'creatoriocore:invar_ingot')
    event.recipes.create.pressing('creatoriocore:bronze_plate', 'creatoriocore:bronze_ingot')
    event.recipes.tfmg.industrial_blasting(Fluid.of('tfmg:liquid_silicon', 250), 'creatoriocore:silicon_dust')
    event.recipes.tfmg.casting('tfmg:silicon_ingot', Fluid.of('tfmg:liquid_silicon', 500))
    event.recipes.tfmg.vat_machine_recipe('creatoriocore:insulated_cypherwire', ['4x creatoriocore:drawn_quartz_string', Fluid.of('rubberworks:resin', 1000)]).superheated().allowedVatTypes(['tfmg:cast_iron_vat'])
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
})
