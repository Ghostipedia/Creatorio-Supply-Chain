console.info('TOOLTIP SCRIPT LOADED')

ItemEvents.modifyTooltips(event => {
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Mechanized Wings with Integrated Hovering Capabilities').gray())
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Enables Creative Flight and Elytra Gliding').red())
    event.add('farmersdelight:straw', Text.of('Automatically farmable from ').white())
    event.add('farmersdelight:straw', Text.of('Wheat with Create.').white())
    
    
    event.add('creatoriocore:steel_frogport', Text.of('TODO: UPDATE MODEL').red())
    event.add('create_rns:tin_deposit_block', Text.of('Tin Only Spawns in the Nether.').red())
    event.add('create_rns:tin_deposit_block', Text.of('Overworld Variant is there as a crash safeguard, does nothing.').red())
    event.add('creatoriocore:induction_magnet', Text.of('Tier One Magnet.').aqua())

 event.add('creatoriocore:ferrite_magnet', Text.of('Future Content').aqua())
 event.add('creatoriocore:neodymium_magnet', Text.of('Future Content').aqua())
 event.add('creatoriocore:superconducting_magnet', Text.of('Future Content').aqua())

})