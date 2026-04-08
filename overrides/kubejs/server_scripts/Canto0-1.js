ServerEvents.recipes(event => {
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


    event.recipes.farmersdelight.cutting(
        'minecraft:wheat',
        'create:wrench',
        [
            ChanceResult.of('create:wheat_flour', 0.20)
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
    event.blasting('creatoriocore:primitive_andesite_alloy', 'creatoriocore:weak_putty')

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

    event.shaped('create:andesite_casing', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'creatoriocore:andesite_casing_modular_boards',
        B: 'creatoriocore:primitive_assembly_component',
        C: 'creatoriocore:primitive_andesite_alloy',
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

    event.recipes.create.mixing('create:andesite_alloy', ['minecraft:clay_ball', 'minecraft:iron_nugget', 'minecraft:andesite'])

    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of('create:andesite_casing')
        ],
        // Input:
        '#minecraft:planks',
        // Sequence:
        [
            event.recipes.create.deploying('create_connected:andesite_encased_cross_connector', ['create_connected:andesite_encased_cross_connector', 'create:andesite_alloy',]),
            event.recipes.create.deploying('create_connected:andesite_encased_cross_connector', ['create_connected:andesite_encased_cross_connector', 'creatoriocore:primitive_assembly_component',]),
            event.recipes.create.deploying('create_connected:andesite_encased_cross_connector', ['create_connected:andesite_encased_cross_connector', 'creatoriocore:andesite_casing_modular_boards',]),
        ]
    )
        //Transitional Item: Used in the Sequence Steps Above normally.
        .transitionalItem('create_connected:andesite_encased_cross_connector')



})