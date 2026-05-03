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
  event.shaped('4x createfisheryindustry:frame_trap', [
    'ABA',
    'ACA',
    'ABA'
  ], {
    A: 'createfisheryindustry:zinc_sheet',
    B: 'minecraft:string',
    C: 'creatoriocore:andesite_casing_internals'
  })
  event.shaped('4x createfisheryindustry:mesh_trap', [
    'ABA',
    'C C',
    'ABA'
  ], {
    A: 'createfisheryindustry:zinc_sheet',
    B: 'createfisheryindustry:frame_trap',
    C: 'creatoriocore:andesite_alloy_braces'
  })
  event.shaped('createfisheryindustry:trap_nozzle', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'createfisheryindustry:zinc_sheet',
    B: 'create:nozzle'
  })
  //hostile drops
  event.recipes.create.filling('minecraft:rotten_flesh', ['farmersdelight:cod_slice', Fluid.of('creatoriocore:wayward_essence', 25)])
  event.recipes.create.filling('minecraft:spider_eye', ['minecraft:ghast_tear', Fluid.of('creatoriocore:wayward_essence', 25)])
  event.recipes.create.filling('minecraft:gunpowder', ['create:cinder_flour', Fluid.of('creatoriocore:wayward_essence', 25)])
  event.recipes.create.filling('minecraft:bone', ['minecraft:bamboo', Fluid.of('creatoriocore:wayward_essence', 25)])
  event.recipes.create.filling('minecraft:ender_pearl', ['minecraft:snowball', Fluid.of('creatoriocore:wayward_essence', 25)])

  event.recipes.create.filling('minecraft:echo_shard', ['minecraft:amethyst_shard', Fluid.of('creatoriocore:homeward_essence', 1000)])


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
})

//compost tag for ink pearls
ServerEvents.tags('item', event => {
  event.add('ratatouille:compostable_items_4to1', 'creatoriocore:ink_pearl_seeds')
  event.remove('c:ingots/steel', 'createnuclear:steel_ingot')
  event.remove('c:nuggets/steel', 'createnuclear:steel_nugget')
  event.remove('c:storage_blocks/steel', 'createnuclear:steel_block')
  event.remove('c:ingots/lead', 'createnuclear:lead_ingot')
  event.remove('c:nuggets/lead', 'createnuclear:lead_nugget')
  event.remove('c:storage_blocks/lead', 'createnuclear:lead_block')
  event.remove('c:storage_blocks/raw_lead', 'createnuclear:raw_lead_block')
  event.remove('c:raw_materials/lead', 'createnuclear:raw_lead')
})



ServerEvents.tags('block', event => {
  event.add('creatoriocore:hose_gantry_targets', 'create_connected:fluid_vessel')
  event.add('creatoriocore:hose_gantry_targets', 'tfmg:cast_iron_fluid_tank')
  event.add('creatoriocore:hose_gantry_targets', 'tfmg:aluminum_fluid_tank')
  event.add('creatoriocore:hose_gantry_targets', 'tfmg:steel_fluid_tank')

  event.add('create:non_movable', 'minecraft:spawner')
  event.add('create:non_movable', 'minecraft:trial_spawner')

  event.add('simulated:non_movable', 'minecraft:spawner')
  event.add('simulated:non_movable', 'minecraft:trial_spawner')
  event.add('simulated:non_movable', 'create_connected:item_silo')
})
ServerEvents.compostableRecipes(event => {
  event.add(Item.of('creatoriocore:ink_pearl_seeds'), 0.3)
})

