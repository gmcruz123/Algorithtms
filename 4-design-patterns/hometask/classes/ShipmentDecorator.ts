import { Item } from '../interfaces/item';
import { Shipment } from './shipment';

export class ShipmentDecorator extends Shipment {
    protected shipment: Shipment;
  
    constructor(item: Item, shipment: Shipment) {
      super(item);
      this.shipment = shipment;
    }
  
    getInstance() {
      return this.shipment.getInstance();
    }
  
    getShipmentId(): number {
      return this.shipment.getShipmentId();
    }
  
    ship(): string {
      return this.shipment.ship();
    }
  }
  