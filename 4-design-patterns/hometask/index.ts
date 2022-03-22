import { AirEastShipper } from './classes/AirEastShipper';
import { ChicagoSprintShipper } from './classes/ChicagoSprintShipper';
import { PacificParcelShipper } from './classes/PacificParcelShipper';
import { createShipment, Shipment } from './classes/shipment';
import { Shipper } from './classes/shipper';
import { Item } from './interfaces/item';


export class Client {
  private item: Item;
  constructor(item: Item) {
    this.item = item;
  }

  getShipper(): Shipper {
    switch (this.item.fromZipCode[0]) {
      case '1':
      case '2':
      case '3': {
        return new AirEastShipper().getInstance();
      }
      case '4':
      case '5':
      case '6': {
        return new ChicagoSprintShipper().getInstance();
      }
      case '7':
      case '8':
      case '9': {
        return new PacificParcelShipper().getInstance();
      }
      default: {
        return new AirEastShipper().getInstance();
      }
    }
  }

  getShipment(): Shipment {
    return createShipment(this.item, this.getShipper())
  }
}
