console.info('TOOLTIP SCRIPT LOADED')

ItemEvents.modifyTooltips(event => {
    event.add('create:empty_blaze_burner', Text.of('Recipe Disabled: End of Current Content!').red())
})
