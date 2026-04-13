
ServerEvents.recipes(event => {


    event.recipes.create.sequenced_assembly(
        'creatoriocore:highly_advanced_electron_tube',
        'creatoriocore:advanced_electron_tube',
        [
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'tfmg:circuit_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'powergrid:electrical_gizmo']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'tfmg:circuit_board']),
            event.recipes.create.deploying('creatoriocore:incomplete_highly_advanced_electron_tube', ['creatoriocore:incomplete_highly_advanced_electron_tube', 'powergrid:electrical_gizmo'])
        ]
    ).transitionalItem('creatoriocore:incomplete_highly_advanced_electron_tube')




})

