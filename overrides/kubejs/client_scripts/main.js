console.info('TOOLTIP SCRIPT LOADED')

ItemEvents.modifyTooltips(event => {
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Mechanized Wings with Integrated Hovering Capabilities').gray())
    event.add('minecraft:elytra[unbreakable={}]', Text.of('Enables Creative Flight and Elytra Gliding').red())
})
