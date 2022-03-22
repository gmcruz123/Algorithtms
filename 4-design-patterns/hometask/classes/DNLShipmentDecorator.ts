import { ShipmentDecorator } from './ShipmentDecorator';

export class DNLShipmentDecorator extends ShipmentDecorator {
    getInstance() {
      return this.shipment.getInstance();
    }
  
    getShipmentId(): number {
      return this.shipment.getShipmentId();
    }
  
    ship(): string {
      return `${this.shipment.ship()}
      **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
    }
  }