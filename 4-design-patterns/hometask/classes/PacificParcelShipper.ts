import { Shipper } from './shipper';

export class PacificParcelShipper extends Shipper {
    private static shipper: Shipper;
  
    getInstance() {
      if (!PacificParcelShipper.shipper) {
        PacificParcelShipper.shipper = new PacificParcelShipper();
      }
      return PacificParcelShipper.shipper;
    }
  
    getLetterCost(weight: number): number {
      return weight * 0.51;
    }
  
    getPackageCost(weight: number): number {
      return weight * 0.19;
    }
    getOversizedCost(weight: number): number {
      return weight * 0.02 + this.getPackageCost(weight);
    }
  }
  