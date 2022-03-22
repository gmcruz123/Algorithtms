import { Item } from '../interfaces/item';
import { Shipment } from './shipment';
import { Shipper } from './shipper';

export class Package extends Shipment {
    private static shipment: Shipment;
    private shipper: Shipper;
  
    constructor(item: Item, shipper: Shipper) {
      super(item);
      this.shipper = shipper;
    }
  
    getInstance() {
      if (!Package.shipment) {
        Package.shipment = new Package(this.item, this.shipper);
      }
      return Package.shipment;
    }
  
    ship(): string {
      return `Shipment with the ID ${this.getShipmentId()} will be picked up from ${
        this.item.fromZipCode
      } and shipped to ${this.item.toAddress}
      Cost = ${this.shipper.getCost(this.item)}
    `;
    }
  }