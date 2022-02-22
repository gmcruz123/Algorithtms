import { Item } from './item.class';
import { ItemComparator } from '../interfaces/itemComparator.interface';

export class Inventory {
  private items: Item[];

  constructor () {
    this.items = [];
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }
  public sort(comparator?: ItemComparator) : void;

  public sort() : void { };
  
  public toString(): string {
    return this.items.join(', ');
  }

}
