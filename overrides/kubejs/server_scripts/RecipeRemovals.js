
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


    //TFMG
    event.remove({ id: 'tfmg:casting/steel' })
    event.remove({ id: 'tfmg:compacting/cast_iron' })
    event.remove({ id: 'tfmg:smelting/fireproof_brick' })
})



