import { Shipper } from './shipper';

export class AirEastShipper extends Shipper {
    private static shipper: Shipper;
  
    getInstance() {
      if (!AirEastShipper.shipper) {
        AirEastShipper.shipper = new AirEastShipper();
      }
      return AirEastShipper.shipper;
    }
  
    getLetterCost(weight: number): number {
      return weight * 0.39;
    }
  
    getPackageCost(weight: number): number {
      return weight * 0.25;
    }
    
    getOversizedCost(weight: number): number {
      return this.getPackageCost(weight) + 10;
    }
  }
  