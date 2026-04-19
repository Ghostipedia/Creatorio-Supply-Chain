
ServerEvents.recipes(event => {


    event.recipes.create.sequenced_assembly(
        'creatoriocore:highly_advanced_electron_tube',
        'creatoriocore:advanced_electron_tube',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'tfmg:circuit_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'creatoriocore:silicon_chips']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'tfmg:circuit_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'creatoriocore:silicon_chips'])
        ]
    ).transitionalItem('creatoriocore:incomplete_highly_advanced_electron_tube')




})

