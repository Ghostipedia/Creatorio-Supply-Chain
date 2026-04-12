// ENABLE WHEN CANTO 3 RELEASES
ServerEvents.recipes(event => {
event.recipes.create.item_application(
        'tfmg:steel_casing',
        ['tfmg:heavy_plate', 'creatoriocore:cypherwire_housing']
    )
event.recipes.create.item_application(
         'creatoriocore:cypherwire_housing',
        ['creatoriocore:cypherwire_spool', 'tfmg:hardened_planks']
    )

    event.remove({ input: 'tfmg:heavy_plate' })
    event.remove({ input: 'tfmg:steel_ingot' })
    event.remove({ input: 'tfmg:steel_casing' })
    event.remove({ id: 'tfmg:sequenced_assembly/generator' })
})
