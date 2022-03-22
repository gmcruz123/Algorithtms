import { Shipment } from './shipment';
import { ShipmentDecorator } from './ShipmentDecorator';

export class ReturnReceiptShipmentDecorator extends ShipmentDecorator {
    getInstance(): Shipment {
      return this.shipment.getInstance();
    }
  
    getShipmentId(): number {
      return this.shipment.getShipmentId();
    }
  
    ship(): string {
      return `${this.shipment.ship()}
      **MARK RETURN RECEIPT REQUESTED**`;
    }
  }
  