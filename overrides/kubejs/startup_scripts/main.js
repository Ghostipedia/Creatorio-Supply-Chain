// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

// Match netherrack hardness/resistance to deepslate
BlockEvents.modification(event => {
    event.modify('minecraft:netherrack', block => {
        block.destroySpeed = 3.0
        block.explosionResistance = 6.0
    })
})
