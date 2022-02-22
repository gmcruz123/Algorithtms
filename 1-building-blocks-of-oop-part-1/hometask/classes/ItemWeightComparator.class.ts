import { Item } from './item.class';
import { ItemComparator } from '../interfaces/itemComparator.interface';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item): number {
        return 0;
    }
}
