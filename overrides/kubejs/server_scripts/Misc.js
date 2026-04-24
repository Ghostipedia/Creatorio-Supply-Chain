ServerEvents.recipes(event => {
    event.shaped('4x create:item_vault', [
        'CC',
        'CC'
    ], {
        C: 'dndecor:storage_container'
    }).id('creatorio:item_vault_from_storage_container')

    event.shaped('drivebywire:controller_hub', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'drivebywire:wire',
    B: 'create:linked_controller',
    C: 'creatoriocore:brass_logic_core',
    D: 'create:brass_casing',
    E: 'create:electron_tube'
  })

    event.shaped('drivebywire:tweaked_controller_hub', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'drivebywire:wire',
    B: 'create_tweaked_controllers:tweaked_linked_controller',
    C: 'creatoriocore:brass_logic_core',
    D: 'create:brass_casing',
    E: 'create:electron_tube'
  })
    
    event.recipes.createvintageneoforged.coiling('4x drivebywire:wire', 'creatoriocore:insulated_cypherwire')

    event.shaped('drivebywire:wire_cutter', [
    ' A ',
    'BCA',
    ' B '
  ], {
    A: 'create:iron_sheet',
    B: 'minecraft:stick',
    C: 'minecraft:shears'
  })
    //saves wire settings when put on a vehicle and then printed with a schematic i believe
    event.shaped('drivebywire:backup_block', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:black_wool',
    B: 'drivebywire:wire',
    C: 'create:andesite_casing'
  })
})