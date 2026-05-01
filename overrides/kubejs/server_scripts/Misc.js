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
    A: 'creatoriocore:cypherwire_spool',
    B: 'create:linked_controller',
    C: 'creatoriocore:brass_logic_core',
    D: 'create:railway_casing',
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
  //coral smoking
  event.smoking('minecraft:dead_tube_coral_block', 'minecraft:tube_coral_block')
  event.smoking('minecraft:dead_brain_coral_block', 'minecraft:brain_coral_block')
  event.smoking('minecraft:dead_bubble_coral_block', 'minecraft:bubble_coral_block')
  event.smoking('minecraft:dead_fire_coral_block', 'minecraft:fire_coral_block')
  event.smoking('minecraft:dead_horn_coral_block', 'minecraft:horn_coral_block')
  event.smoking('minecraft:dead_tube_coral', 'minecraft:tube_coral')
  event.smoking('minecraft:dead_tube_coral_fan', 'minecraft:tube_coral_fan')
  event.smoking('minecraft:dead_brain_coral', 'minecraft:brain_coral')
  event.smoking('minecraft:dead_brain_coral_fan', 'minecraft:brain_coral_fan')
  event.smoking('minecraft:dead_bubble_coral', 'minecraft:bubble_coral')
  event.smoking('minecraft:dead_bubble_coral_fan', 'minecraft:bubble_coral_fan')
  event.smoking('minecraft:dead_fire_coral', 'minecraft:fire_coral')
  event.smoking('minecraft:dead_fire_coral_fan', 'minecraft:fire_coral_fan')
  event.smoking('minecraft:dead_horn_coral', 'minecraft:horn_coral')
  event.smoking('minecraft:dead_horn_coral_fan', 'minecraft:horn_coral_fan')
  //new age things
  //the supercharged ingots for these things are post electricity seemed a bit far in for a... sidegrade? to blaze burners
  //also thorium is unobtainable for pumps
  //dont know if i should put the removals in this file or the removals one
  event.remove({ id: 'create_new_age:shaped/heat_pump' })
  event.remove({ id: 'create_new_age:shaped/heater' })
  event.remove({ id: 'create_new_age:shaped/advanced_solar_heating_plate' })
  event.shaped('4x create_new_age:heat_pump', [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: 'tfmg:cast_iron_sheet',
    B: 'create_new_age:heat_pipe',
    C: 'tfmg:lead_ingot'
  })
  event.shaped('create_new_age:heater', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'create:copper_sheet',
    B: 'createdeco:netherite_nugget',
    C: 'create:blaze_burner',
    D: 'create_new_age:heat_pipe',
    E: 'tfmg:cast_iron_block'
  })
event.shaped('create_new_age:advanced_solar_heating_plate', [
    'AAA',
    'BCB',
    'BDB'
  ], {
    A: 'minecraft:glass',
    B: 'minecraft:copper_ingot',
    C: 'create_new_age:basic_solar_heating_plate',
    D: 'tfmg:cast_iron_block'
  })
})

  //compost tag for ink pearls
ServerEvents.tags('item', event => {
  event.add('ratatouille:compostable_items_4to1', 'creatoriocore:ink_pearl_seeds')
})
ServerEvents.compostableRecipes(event => {
    event.add(Item.of('creatoriocore:ink_pearl_seeds'), 0.3)
})

