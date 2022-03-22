import { Shipper } from './shipper';

export class ChicagoSprintShipper extends Shipper {
    private static shipper: Shipper;
  
    getInstance() {
      if (!ChicagoSprintShipper.shipper) {
        ChicagoSprintShipper.shipper = new ChicagoSprintShipper();
      }
      return ChicagoSprintShipper.shipper;
    }
  
    getLetterCost(weight: number): number {
      return weight * 0.42;
    }
  
    getPackageCost(weight: number): number {
      return weight * 0.2;
    }
    getOversizedCost(weight: number = 0): number {
      return weight;
    }
  }
  