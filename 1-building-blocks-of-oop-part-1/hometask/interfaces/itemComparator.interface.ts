import { Comparator } from './comparator.interface';
import { Item } from '../classes/item.class';

export interface ItemComparator extends Comparator<Item> {
    compare(first: Item, second: Item): number;
}
