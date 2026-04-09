ServerEvents.recipes(event => {


    event.shaped('tfmg:fireproof_bricks', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'creatoriocore:weak_putty',
        B: 'tfmg:fireproof_brick',
        C: 'minecraft:resin_brick'
    })

    
    event.smelting('tfmg:fireproof_brick', 'creatoriocore:fireclay_kaolin_blend')
    event.recipes.create.mixing(Item.of('creatoriocore:fireclay_kaolin_blend', 2), ['creatoriocore:kaolin_clay', 'tfmg:fireclay_ball'])
    event.recipes.create.mixing('creatoriocore:kaolin_clay', ['creatoriocore:sintered_flint', 'minecraft:clay_ball', 'create:cinder_flour'])
})
