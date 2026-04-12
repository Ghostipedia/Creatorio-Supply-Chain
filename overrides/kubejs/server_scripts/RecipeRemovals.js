
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
    event.remove({ input: itemName })
  })

  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}
yeet('create_rns:resonance_buffer')
yeet('create_rns:shattering_resonator')
yeet('create_rns:stabilizing_resonator')
yeet('create_rns:resonator')
yeet('sophisticatedbackpacks:stack_upgrade_starter_tier')
yeet('sophisticatedbackpacks:stack_upgrade_tier_1')
yeet('sophisticatedbackpacks:stack_upgrade_tier_2')
yeet('sophisticatedbackpacks:stack_upgrade_tier_3')
yeet('sophisticatedbackpacks:stack_upgrade_tier_4')
yeet('sophisticatedbackpacks:stack_downgrade_tier_1')
yeet('sophisticatedbackpacks:stack_downgrade_tier_2')
yeet('sophisticatedbackpacks:stack_downgrade_tier_3')
yeet('sophisticatedbackpacks:stack_upgrade_omega_tier')
ServerEvents.recipes(event => {

  event.remove({ id: 'create:haunting/soul_soil' })
  event.remove({ id: 'create:item_application/andesite_casing_from_log_using_deployer' })
  event.remove({ id: 'create:item_application/andesite_casing_from_wood_using_deployer' })
  event.remove({ id: 'create:item_application/andesite_casing_from_log' })
  event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
  event.remove({ id: 'rubberworks:crafting/compressor' })
  event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
  event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
  event.remove({ id: 'create:mixing/andesite_alloy' })
  event.remove({ id: 'create:crafting/materials/andesite_alloy' })
  event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })

  event.remove({ id: 'create:crafting/materials/andesite_alloy_block' })
  event.remove({ id: 'create:crafting/materials/andesite_alloy_from_block' })
  event.remove({ id: 'rubberworks:compacting/rubber' })
  event.remove({ id: 'create_rns:miner_bearing' })

  event.remove({ id: 'create:crafting/kinetics/wrench' })
  event.remove({ id: 'create:crafting/materials/rose_quartz' })
  event.remove({ id: 'create:crafting/kinetics/deployer' })
  event.remove({ id: 'create:crafting/logistics/package_frogport' })
  event.remove({ id: 'dndesires:crafting/frogport' })
  event.remove({ id: 'create:crafting/logistics/stock_link' })
  event.remove({ id: 'create:crafting/logistics/content_observer' })
  event.remove({ id: 'create:crafting/materials/transmitter' })

  event.remove({ id: 'create:crushing/redstone_ore' })
  event.remove({ id: 'create:crushing/deepslate_redstone_ore' })
  event.remove({ id: 'create:item_application/brass_casing_from_wood' })
  event.remove({ id: 'create:item_application/brass_casing_from_log' })
  event.remove({ id: 'create:item_application/brass_casing_from_wood_using_deployer' })
  event.remove({ id: 'create:item_application/brass_casing_from_log_using_deployer' })
  event.remove({ id: 'create:mechanical_crafting/crushing_wheel' })
  event.remove({ id: 'create:item_application/railway_casing_using_deployer' })
  event.remove({ id: 'create:item_application/railway_casing' })
  event.remove({ id: 'tfmg:crafting/materials/fireproof_bricks' })
  event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
  event.remove({ id: 'create_connected:sequenced_assembly/control_chip' })
  event.remove({ id: 'createvintageneoforged:craft/spring_coiling_machine_wheel' })
  event.remove({ id: 'create:crafting/logistics/factory_gauge' })
  event.remove({ id: 'create:crafting/kinetics/steam_engine' })
  event.remove({ id: 'farmersdelight:canvas' })
  event.remove({ type: 'createvintageneoforged:centrifuge' })
  event.remove({ id: 'supplementaries:lapis_bricks' })
  event.remove({ id: 'createadditionallogistics:crafting/logistics/package_accelerator' })
  event.remove({ id: 'dndesires:crafting/omni_gearbox' })
  event.remove({ id: 'tfmg:item_application/steel_casing' })
  event.remove({ id: 'tfmg:item_application/steel_casing_using_deployer' })


  //TFMG
  event.remove({ id: 'tfmg:casting/steel' })
  event.remove({ id: 'tfmg:compacting/cast_iron' })
  event.remove({ id: 'tfmg:smelting/fireproof_brick' })
  event.remove({ id: 'tfmg:industrial_blasting/steel_from_dust' })
  event.remove({ id: 'tfmg:industrial_blasting/steel_from_raw_iron' })
  event.remove({ id: 'tfmg:industrial_blasting/silicon' })
  event.remove({ id: 'tfmg:industrial_blasting/steel' })
  event.remove({ id: 'tfmg:casting/silicon' })
})



