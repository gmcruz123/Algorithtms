import { ShipmentDecorator } from './ShipmentDecorator';

export class FragileShipmentDecorator extends ShipmentDecorator {
    getInstance() {
      return this.shipment.getInstance();
    }
  
    getShipmentId(): number {
      return this.shipment.getShipmentId();
    }
  
    ship(): string {
      return `${this.shipment.ship()}
      **MARK FRAGILE**`;
    }
  }
  