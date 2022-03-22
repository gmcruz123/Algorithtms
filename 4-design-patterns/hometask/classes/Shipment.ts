import { Item } from '../interfaces/item';
import { Letter } from './Letter';
import { Oversized } from './Oversized';
import { Package } from './Package';
import { Shipper } from './shipper';


let shipmentId = 0;

export abstract class Shipment {
  protected item: Item;
  constructor(item: Item) {
    this.item = item;
  }
  
  abstract getInstance(): Shipment;
  getShipmentId(): number {
    return shipmentId++;
  }
  abstract ship(): string;
}

class CreateShipment {
  shipment: Shipment;
  constructor(shipment: Shipment) {
    this.shipment = shipment;
  }
}

export const createShipment = (item: Item, shipper: Shipper): Shipment => {
    let shipmentInstance: Shipment;
    switch(true) {
        case item.weight <= 15:
            shipmentInstance = new Letter(item, shipper);
        break;
        case item.weight <= 160:
            shipmentInstance = new Package(item, shipper);
        break;
        default:
            shipmentInstance = new Oversized(item, shipper);
        break;
    }
    return new CreateShipment(shipmentInstance).shipment;

};
