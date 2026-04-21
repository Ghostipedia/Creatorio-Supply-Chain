ServerEvents.recipes(event => {

    // Andesite Version
    event.recipes.farmersdelight.cutting(
        'create:andesite_alloy',
        '#minecraft:pickaxes',
        [
            '2xcreatoriocore:primitive_assembly_component'
        ],
        'minecraft:item.axe.strip'
    )

    event.recipes.farmersdelight.cutting(
        'create:andesite_alloy',
        '#minecraft:axes',
        [
            '4x creatoriocore:andesite_alloy_braces'
        ],
        'minecraft:item.axe.strip'
    )


    event.recipes.farmersdelight.cutting(
        'creatoriocore:primitive_andesite_alloy',
        '#minecraft:pickaxes',
        [
            'creatoriocore:primitive_assembly_component'
        ],
        'minecraft:item.axe.strip'
    )

    event.recipes.farmersdelight.cutting(
        'creatoriocore:primitive_andesite_alloy',
        '#minecraft:axes',
        [
            'creatoriocore:andesite_alloy_braces'
        ],
        'minecraft:item.axe.strip'
    )
    event.shaped('create:whisk', [
        ' A ',
        'BAB',
        'BBB'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'create:iron_sheet'
    })
    event.shaped('create:basin', [
        'A A',
        'AAA'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy'
    })
    event.recipes.farmersdelight.cutting(
        'minecraft:fern',
        'create:wrench',
        [
            ChanceResult.of('minecraft:green_dye', 0.20),
            ChanceResult.of('minecraft:wheat_seeds', 0.05)
        ],
        'minecraft:item.axe.strip'
    )
    event.recipes.farmersdelight.cutting(
        'minecraft:wheat',
        'create:wrench',
        [
            ChanceResult.of('create:wheat_flour', 0.20)
        ],
        'minecraft:item.axe.strip'
    )
    event.recipes.farmersdelight.cutting(
        'minecraft:raw_iron',
        'create:wrench',
        [
            'create:crushed_raw_iron'
        ],
        'minecraft:item.axe.strip'
    )

    event.shapeless('4x creatoriocore:weak_putty', [
        '2x minecraft:clay_ball',
        'minecraft:kelp',
        'minecraft:tuff'
    ])
    event.shaped('4x create:shaft', [
        'A',
        'A'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy'
    })
    event.shaped('rubberworks:compressor', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'create:andesite_casing',
        C: 'minecraft:iron_block'
    })
    event.shaped('rubberworks:compressor', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:andesite_casing',
        C: 'minecraft:iron_block'
    })
    event.blasting('creatoriocore:primitive_andesite_alloy', 'creatoriocore:weak_putty')
        .cookingTime(100)
        .xp(0.7)
        .id('creatoriocore:my_fan_blasting_recipe')

    event.shaped('creatoriocore:andesite_casing_internals', [
        ' AB',
        'ACA',
        'BA '
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'creatoriocore:weak_putty',
        C: 'creatoriocore:primitive_assembly_component'
    })

    event.shaped('8x creatoriocore:andesite_casing_modular_boards', [
        'ABA',
        'ASA',
        'ABA'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'farmersdelight:tree_bark',
        S: 'minecraft:slime_ball'
    })
    event.shaped('12x creatoriocore:andesite_casing_modular_boards', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'create:andesite_alloy',
        B: 'farmersdelight:tree_bark',
        C: 'minecraft:slime_ball'
    })
    event.shaped('create:andesite_casing', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'creatoriocore:andesite_casing_modular_boards',
        B: 'creatoriocore:primitive_assembly_component',
        C: 'creatoriocore:andesite_alloy_braces',
        D: 'creatoriocore:andesite_casing_internals'
    })
    event.shaped('2x create:andesite_funnel', [
        'A',
        'B'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'rubberworks:rubber_sheet'
    })

    event.shaped('2x create:andesite_tunnel', [
        'AA',
        'BB'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'rubberworks:rubber_sheet'
    })
    event.shaped('creatoriocore:nether_permit', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        B: 'minecraft:flint_and_steel',
        C: 'rubberworks:rubber_sheet',
        D: 'minecraft:gold_block'
    })
    event.shaped('create:wrench', [
        'AA',
        'AB',
        ' C'
    ], {
        A: 'creatoriocore:primitive_andesite_alloy',
        B: 'create:cogwheel',
        C: 'minecraft:stick'
    })
    event.shaped('create:deployer', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:electron_tube',
        B: 'create:andesite_casing',
        C: 'create:brass_hand'
    })
    event.shaped('create:package_frogport', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:brass_hand',
        B: 'minecraft:slime_ball',
        C: 'dndesires:overburden_casing',
        D: 'creatoriocore:brass_logic_core'
    })
    event.shaped('creatoriocore:andesite_casing_internals', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'create:andesite_alloy',
        B: 'creatoriocore:primitive_assembly_component'
    })
    event.shaped('create_rns:miner_bearing', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'minecraft:polished_andesite_slab',
        B: 'create:precision_mechanism',
        C: 'create:andesite_casing',
        D: 'create:shaft'
    })
    event.shaped('create:transmitter', [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'create:electron_tube',
        B: 'create:copper_sheet',
        C: 'creatoriocore:brass_logic_core'
    })
    event.shaped('create:content_observer', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:electron_tube',
        B: 'creatoriocore:brass_casing_modular_board',
        C: 'minecraft:observer',
        D: 'create:brass_casing'
    })

    event.shaped('3x create:factory_gauge', [
        'A',
        'B',
        'C'
    ], {
        A: 'create_rns:polished_resonant_amethyst',
        B: 'create:precision_mechanism',
        C: 'create:display_link'
    })

    event.custom({
        type: 'dndesires:seething',
        ingredients: [
            { item: 'minecraft:snowball' }
        ],
        results: [
            { id: 'minecraft:ghast_tear', chance: 0.15 }
        ]
    })

    // Quality of life
    event.shaped('4x minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#minecraft:logs'
    })

    event.shaped('16x minecraft:stick', [
        'A',
        'A'
    ], {
        A: '#minecraft:logs'
    })

    // SMELTING
    event.smelting('minecraft:iron_ingot', 'creatoriocore:crumbling_iron').xp(0.1)
    event.smelting('minecraft:gold_ingot', 'creatoriocore:crumbling_gold').xp(0.1)
    event.smelting('create:zinc_ingot', 'creatoriocore:crumbling_zinc').xp(0.1)
    event.smelting('tfmg:nickel_ingot', 'creatoriocore:crumbling_nickel').xp(0.1)
    event.smelting('tfmg:lead_ingot', 'creatoriocore:crumbling_lead').xp(0.1)
    event.smelting('minecraft:copper_ingot', 'creatoriocore:crumbling_copper').xp(0.1)
    event.blasting('minecraft:iron_ingot', 'creatoriocore:crumbling_iron').xp(0.1)
    event.blasting('minecraft:gold_ingot', 'creatoriocore:crumbling_gold').xp(0.1)
    event.blasting('create:zinc_ingot', 'creatoriocore:crumbling_zinc').xp(0.1)
    event.blasting('tfmg:nickel_ingot', 'creatoriocore:crumbling_nickel').xp(0.1)
    event.blasting('tfmg:lead_ingot', 'creatoriocore:crumbling_lead').xp(0.1)
    event.blasting('minecraft:copper_ingot', 'creatoriocore:crumbling_copper').xp(0.1)
    event.blasting('creatoriocore:sintered_flint', 'minecraft:flint')

    // Iron
    event.smelting('minecraft:iron_ingot', 'creatoriocore:sifted_iron')
    event.smelting('minecraft:iron_ingot', 'creatoriocore:milled_iron')
    event.smelting('minecraft:iron_ingot', 'creatoriocore:crumbling_iron')

    // Gold
    event.smelting('minecraft:gold_ingot', 'creatoriocore:sifted_gold')
    event.smelting('minecraft:gold_ingot', 'creatoriocore:milled_gold')
    event.smelting('minecraft:gold_ingot', 'creatoriocore:crumbling_gold')

    // Copper
    event.smelting('minecraft:copper_ingot', 'creatoriocore:sifted_copper')
    event.smelting('minecraft:copper_ingot', 'creatoriocore:milled_copper')
    event.smelting('minecraft:copper_ingot', 'creatoriocore:crumbling_copper')

    // Zinc
    event.smelting('create:zinc_ingot', 'creatoriocore:sifted_zinc')
    event.smelting('create:zinc_ingot', 'creatoriocore:milled_zinc')
    event.smelting('create:zinc_ingot', 'creatoriocore:crumbling_zinc')

    // Nickel
    event.smelting('tfmg:nickel_ingot', 'creatoriocore:sifted_nickel')
    event.smelting('tfmg:nickel_ingot', 'creatoriocore:milled_nickel')
    event.smelting('tfmg:nickel_ingot', 'creatoriocore:crumbling_nickel')

    // Lead
    event.smelting('tfmg:lead_ingot', 'creatoriocore:sifted_lead')
    event.smelting('tfmg:lead_ingot', 'creatoriocore:milled_lead')
    event.smelting('tfmg:lead_ingot', 'creatoriocore:crumbling_lead')

    // Tin
    event.smelting('creatoriocore:tin_ingot', 'creatoriocore:sifted_tin')
    event.smelting('creatoriocore:tin_ingot', 'creatoriocore:milled_tin')
    event.smelting('creatoriocore:tin_ingot', 'creatoriocore:crumbling_tin')


    //Crushing
    event.recipes.create.crushing('2x creatoriocore:crumbling_iron', 'create:crushed_raw_iron')
    event.recipes.create.crushing('2x creatoriocore:crumbling_gold', 'create:crushed_raw_gold')
    event.recipes.create.crushing('2x creatoriocore:crumbling_zinc', 'create:crushed_raw_zinc')
    event.recipes.create.crushing('2x creatoriocore:crumbling_nickel', 'create:crushed_raw_nickel')
    event.recipes.create.crushing('2x creatoriocore:crumbling_lead', 'create:crushed_raw_lead')
    event.recipes.create.crushing('2x creatoriocore:crumbling_copper', 'create:crushed_raw_copper')
    event.recipes.create.crushing('creatoriocore:nether_slag', 'minecraft:nether_bricks')
    event.recipes.create.crushing(['minecraft:gravel', CreateItem.of('3x create:copper_nugget', 0.15)], 'minecraft:granite')



    // Crumbling -> Milled
    event.recipes.create.crushing(['creatoriocore:milled_iron', CreateItem.of('creatoriocore:milled_iron', 0.25)], 'creatoriocore:crumbling_iron')
    event.recipes.create.crushing(['creatoriocore:milled_gold', CreateItem.of('creatoriocore:milled_gold', 0.25)], 'creatoriocore:crumbling_gold')
    event.recipes.create.crushing(['creatoriocore:milled_copper', CreateItem.of('creatoriocore:milled_copper', 0.25)], 'creatoriocore:crumbling_copper')
    event.recipes.create.crushing(['creatoriocore:milled_zinc', CreateItem.of('creatoriocore:milled_zinc', 0.25)], 'creatoriocore:crumbling_zinc')
    event.recipes.create.crushing(['creatoriocore:milled_nickel', CreateItem.of('creatoriocore:milled_nickel', 0.25)], 'creatoriocore:crumbling_nickel')
    event.recipes.create.crushing(['creatoriocore:milled_lead', CreateItem.of('creatoriocore:milled_lead', 0.25)], 'creatoriocore:crumbling_lead')
    event.recipes.create.crushing(['creatoriocore:milled_tin', CreateItem.of('creatoriocore:milled_tin', 0.25)], 'creatoriocore:crumbling_tin')

    // Milled -> Sifted
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_iron', CreateItem.of('creatoriocore:sifted_iron', 0.25)], 'creatoriocore:milled_iron')
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_gold', CreateItem.of('creatoriocore:sifted_gold', 0.25)], 'creatoriocore:milled_gold')
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_copper', CreateItem.of('creatoriocore:sifted_copper', 0.25)], 'creatoriocore:milled_copper')
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_zinc', CreateItem.of('creatoriocore:sifted_zinc', 0.25)], 'creatoriocore:milled_zinc')
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_nickel', CreateItem.of('creatoriocore:sifted_nickel', 0.25)], 'creatoriocore:milled_nickel')
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_lead', CreateItem.of('creatoriocore:sifted_lead', 0.25)], 'creatoriocore:milled_lead')
    event.recipes.createvintageneoforged.vibrating(['creatoriocore:sifted_tin', CreateItem.of('creatoriocore:sifted_tin', 0.25)], 'creatoriocore:milled_tin')


    //MISC
    event.recipes.create.compacting('minecraft:blaze_rod', 'minecraft:blaze_powder')
    event.recipes.create.haunting('minecraft:spider_eye', 'minecraft:oxeye_daisy')

    //MIXER
    event.recipes.create.mixing(Item.of('creatoriocore:weak_putty', 6), ['4x minecraft:clay_ball', 'minecraft:kelp', 'minecraft:wheat'])
    event.recipes.create.mixing('create_rns:resonant_amethyst', ['minecraft:amethyst_shard', '8x minecraft:lapis_lazuli']).heated()
    event.recipes.create.mixing('create:rose_quartz', ['2x minecraft:quartz', '8x minecraft:redstone']).heated()
    event.recipes.create.mixing('create:andesite_alloy', ['minecraft:clay_ball', 'minecraft:iron_nugget', 'minecraft:andesite'])

    //SQUISHING
    event.recipes.create.compacting('farmersdelight:canvas', ['farmersdelight:straw', 'farmersdelight:straw'])

    event.recipes.create.mixing('tfmg:cast_iron_ingot', ['creatoriocore:nether_slag', 'creatoriocore:coal_dust', 'minecraft:iron_ingot']).superheated()
    event.recipes.create.deploying('2x creatoriocore:brass_casing_modular_board', ['create:brass_sheet', Ingredient.of('#minecraft:planks')])

    event.recipes.create.mechanical_crafting(
        'minecraft:elytra[unbreakable={}]',
        [
            ' ABBBA ',
            ' CDBDC ',
            'ABB BBA',
            'CDB BDC',
            'BB   BB',
            'DB   BD',
            'BBB BBB'
        ],
        {
            A: 'creatoriocore:bronze_gear_assembly',
            B: 'creatoriocore:cypherwire_spool',
            C: 'create:precision_mechanism',
            D: 'create_rns:polished_resonant_amethyst'
        }
    )




    event.recipes.create.mechanical_crafting(
        '2x  create:crushing_wheel', // the crate-looking output
        [
            ' SSS ',
            'SSPSS',
            'SPBPS',
            'SSPSS',
            ' SSS '
        ],
        {
            S: 'create:andesite_alloy',      // the light colored sheets
            P: 'create:brass_casing',     // the planks
            B: 'minecraft:andesite'        // the grey block in the center (andesite alloy block? stone?)
        }
    )
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('create:andesite_casing')
        ],
        // Input:
        '#minecraft:planks',
        // Sequence:
        [
            event.recipes.create.deploying('creatoriocore:incomplete_andesite_casing', ['creatoriocore:incomplete_andesite_casing', 'create:andesite_alloy',]),
            event.recipes.create.deploying('creatoriocore:incomplete_andesite_casing', ['creatoriocore:incomplete_andesite_casing', 'creatoriocore:primitive_assembly_component',]),
            event.recipes.create.deploying('creatoriocore:incomplete_andesite_casing', ['creatoriocore:incomplete_andesite_casing', 'creatoriocore:andesite_casing_modular_boards',]),
        ]
    )
        //Transitional Item: Used in the Sequence Steps Above normally.
        .transitionalItem('creatoriocore:incomplete_andesite_casing')


    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            'creatoriocore:brass_logic_core'
        ],
        // Input:
        'create:brass_sheet',
        // Sequence:
        [
            event.recipes.create.deploying('creatoriocore:incomplete_brass_logic_core', ['creatoriocore:incomplete_brass_logic_core', 'create:rose_quartz',]),
            event.recipes.create.deploying('creatoriocore:incomplete_brass_logic_core', ['creatoriocore:incomplete_brass_logic_core', 'creatoriocore:primitive_assembly_component',]),
            event.recipes.create.deploying('creatoriocore:incomplete_brass_logic_core', ['creatoriocore:incomplete_brass_logic_core', 'create:cogwheel',]),
        ]
    )
        //Transitional Item: Used in the Sequence Steps Above normally.
        .transitionalItem('creatoriocore:incomplete_brass_logic_core')

    event.recipes.create.sequenced_assembly(
        'create:brass_casing',
        'create:cardboard_block',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_brass_casing', ['creatoriocore:incomplete_brass_casing', 'creatoriocore:brass_casing_modular_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_brass_casing', ['creatoriocore:incomplete_brass_casing', 'create:brass_sheet']),
            event.recipes.create.deploying('creatoriocore:incomplete_brass_casing', ['creatoriocore:incomplete_brass_casing', 'creatoriocore:brass_casing_modular_board']),
            event.recipes.create.pressing('creatoriocore:incomplete_brass_casing', 'creatoriocore:incomplete_brass_casing')
        ]
    ).transitionalItem('creatoriocore:incomplete_brass_casing').loops(3)
})