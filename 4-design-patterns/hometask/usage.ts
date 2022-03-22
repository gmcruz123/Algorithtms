import { Inventory } from "./classes/inventory.class";
import { Item } from "./classes/item.class";
import { ItemWeightComparator } from "./classes/ItemWeightComparator.class";
import { Pizza } from "./classes/pizza.class";
import { Sword } from "./classes/sword.class";

let inventory: Inventory = new Inventory();
const firstItem: Item = new Sword(30.4219, 0.7893, 300, 2.032);
const secondItem: Item = new Sword(40, 0.7893, 200, 2);
const thirdItem: Item = new Sword(40, 1, 100, 3);
const pizzaItem: Item = new Pizza(12, false);
const showMessage = (msg: string): void => console.log(msg)
showMessage(inventory.toString());
inventory.addItem(firstItem);
inventory.addItem(secondItem);
inventory.addItem(thirdItem);
inventory.addItem(pizzaItem);
inventory.sort();
showMessage(inventory.toString());
inventory.sort(new ItemWeightComparator());
showMessage(firstItem.use());
showMessage(secondItem.use());
showMessage(thirdItem.use());
showMessage(pizzaItem.use());
showMessage(inventory.toString());

