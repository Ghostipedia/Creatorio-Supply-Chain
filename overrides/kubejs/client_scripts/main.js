console.info('TOOLTIP SCRIPT LOADED')

ItemEvents.modifyTooltips(event => {
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Mechanized Wings with Integrated Hovering Capabilities').gray())
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Enables Creative Flight and Elytra Gliding').red())
    
    
    event.add('create_rns:tin_deposit_block', Text.of('Tin Only Spawns in the Nether.').red())
    event.add('create_rns:tin_deposit_block', Text.of('Overworld Variant is there as a crash safeguard, does nothing.').red())



})
