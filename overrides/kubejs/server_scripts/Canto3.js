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
    event.recipes.create.item_application(
        'powergrid:conductive_casing',
        ['tfmg:steel_casing', 'powergrid:electrical_gizmo']
    )
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
    event.shaped('powergrid:rheostat', [
        'AB ',
        'CDC',
        'CEC'
    ], {
        A: 'creatoriocore:coal_dust',
        B: 'create:shaft',
        C: 'powergrid:resistive_coil',
        D: 'create_connected:control_chip',
        E: 'powergrid:conductive_casing'
    })


    event.recipes.create.mechanical_crafting(
        'powergrid:generator_induction_rotor',
        [
            'BDB',
            'DQD',
            'BDB'
        ],
        {
            D: 'powergrid:magnet',
            Q: 'create:shaft',
            B: 'powergrid:copper_coil'
        }
    )
    event.recipes.create.sequenced_assembly(
        'tfmg:circuit_board',
        'tfmg:etched_circuit_board',
        [
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:capacitor_item']),
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'powergrid:resistor']),
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:transistor_item']),
            event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'powergrid:resistor'])
        ]
    ).transitionalItem('tfmg:unfinished_circuit_board').loops(4)
    event.recipes.create.sequenced_assembly(
        'powergrid:electrical_gizmo',
        'powergrid:zinc_sheet',
        [
            event.recipes.create.deploying('powergrid:incomplete_electrical_gizmo', ['powergrid:incomplete_electrical_gizmo', 'creatoriocore:advanced_electron_tube']),
            event.recipes.create.deploying('powergrid:incomplete_electrical_gizmo', ['powergrid:incomplete_electrical_gizmo', 'tfmg:steel_mechanism']),
            event.recipes.create.deploying('powergrid:incomplete_electrical_gizmo', ['powergrid:incomplete_electrical_gizmo', 'creatoriocore:silicon_chips']),
            event.recipes.create.deploying('powergrid:incomplete_electrical_gizmo', ['powergrid:incomplete_electrical_gizmo', 'powergrid:integrated_circuit'])
        ]
    ).transitionalItem('powergrid:incomplete_electrical_gizmo')
    event.recipes.create.crushing(CreateItem.of('minecraft:ancient_debris', 0.015), 'minecraft:red_nether_bricks')
    event.recipes.create.cutting(Item.of('creatoriocore:silicon_wafer', 4), 'creatoriocore:silicon_boule')
    event.recipes.create.cutting(Item.of('creatoriocore:silicon_strips', 4), 'creatoriocore:silicon_wafer')
    event.recipes.create.cutting(Item.of('creatoriocore:silicon_chips', 4), 'creatoriocore:silicon_strips')
    event.recipes.create.cutting(Item.of('creatoriocore:andesite_alloy_braces', 4), 'create:shaft')
    event.recipes.createvintageneoforged.coiling('powergrid:copper_coil', 'create:copper_sheet')
    event.recipes.create.pressing('malum:soul_stained_steel_plating', 'malum:soul_stained_steel_ingot')
    event.recipes.create.mixing('malum:soul_stained_steel_ingot', ['tfmg:copper_sulfate', 'minecraft:dragon_breath', 'tfmg:steel_ingot', Fluid.of('creatoriocore:molten_lapis', 1000)]).superheated()
    // event.custom(
    //     {
    //         "type": "malum:spirit_infusion",
    //         "extra_items": [
    //             {
    //                 "count": 4,
    //                 "item": "gtceu:soulresin_ingot"
    //             },
    //             {
    //                 "count": 1,
    //                 "item": "malum:processed_soulstone"
    //             },
    //             {
    //                 "count": 1,
    //                 "item": "tconstruct:magma_bottle"
    //             }
    //         ],
    //         "input": {
    //             "count": 4,
    //             "item": "gtceu:aluminium_ingot"
    //         },
    //         "output": {
    //             "count": 4,
    //             "item": "malum:soul_stained_steel_ingot"
    //         },
    //         "spirits": [
    //             {
    //                 "type": "wicked",
    //                 "count": 3
    //             },
    //             {
    //                 "type": "arcane",
    //                 "count": 2
    //             },
    //             {
    //                 "type": "earthen",
    //                 "count": 1
    //             },
    //         ]
    //     }
    // ).id("malum:spirit_infusion.frontiers.steel_stained_soul")

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
