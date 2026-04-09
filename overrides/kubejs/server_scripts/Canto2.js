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

})
