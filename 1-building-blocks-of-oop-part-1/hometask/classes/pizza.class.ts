import { Consumable } from "./consumable.class";

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super('Pizza', 100, 50, spoiled);
    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = 0;
  }

  public eat(): string {
    return "You eat the bread.";
  }
}
