ServerEvents.recipes(event => {
    event.shaped('4x create:item_vault', [
        'CC',
        'CC'
    ], {
        C: 'dndecor:storage_container'
    }).id('creatorio:item_vault_from_storage_container')
})