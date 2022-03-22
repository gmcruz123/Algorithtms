import { Item } from '../interfaces/item';

export abstract class Shipper {
    
  protected abstract getLetterCost(weight: number): number;
  protected abstract getPackageCost(weight: number): number;
  protected abstract getOversizedCost(weight: number): number;

  abstract getInstance(): Shipper;
  getCost(item: Item): number {
    let cost: number ;
    
    switch(true) {
        case item.weight <= 15 :
            cost = this.getLetterCost(item.weight);
        break;
        case item.weight <= 160 :
            cost = this.getPackageCost(item.weight);
        break;
        default :
            cost = this.getOversizedCost(item.weight);
        break;
    }
    return cost;

  }

}



