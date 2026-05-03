console.info('TOOLTIP SCRIPT LOADED')

ItemEvents.modifyTooltips(event => {
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Mechanized Wings with Integrated Hovering Capabilities').gray())
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Enables Creative Flight and Elytra Gliding').red())
    event.add('farmersdelight:straw', Text.of('Automatically farmable from ').gray())
    event.add('farmersdelight:straw', Text.of('Wheat with Create.').gray())


    event.add('creatoriocore:steel_frogport', Text.of('TODO: UPDATE MODEL').red())
    event.add('create_rns:tin_deposit_block', Text.of('Tin Only Spawns in the Nether.').red())
    event.add('create_rns:tin_deposit_block', Text.of('Overworld Variant is there as a crash safeguard, does nothing.').red())
    event.add('creatoriocore:induction_magnet', Text.of('Tier One Magnet.').aqua())
    event.add('malum:void_depot', Text.of('Disabled From World Generation').aqua())

    event.add('creatoriocore:abrosium_berry', Text.of('Not Yet Implemented').aqua())
    event.add('creatoriocore:metallic_succulent', Text.of('Not Yet Implemented').aqua())
    event.add('creatoriocore:whirlshade_mint', Text.of('Not Yet Implemented').aqua())
    event.add('creatoriocore:honeyrose', Text.of('Not Yet Implemented').aqua())
    event.add('creatoriocore:midnight_moondrop', Text.of('Not Yet Implemented').aqua())
    event.add('creatoriocore:arcalite_pyre', Text.of('Not Yet Implemented').aqua())
    event.add('creatoriocore:welder', Text.of('Ponder NYI : Check the Quest!').aqua())

    event.add('creatoriocore:ferrite_magnet', Text.of('Future Content').aqua())
    event.add('creatoriocore:neodymium_magnet', Text.of('Future Content').aqua())
    event.add('creatoriocore:superconducting_magnet', Text.of('Future Content').aqua())
    event.add('creatoriocore:foundry_blaze', Text.of('Consumes 20mb/s of all Catalysts/Fuels').aqua())
    event.add('creatoriocore:alveary_wall_casing', Text.of('Consumes 27mb/s Sugar Water').aqua())
    event.add('creatoriocore:alveary_wall_casing', Text.of('Consumes 4mb/s of Glowberry Milkshake for 4x Production').aqua())

})
