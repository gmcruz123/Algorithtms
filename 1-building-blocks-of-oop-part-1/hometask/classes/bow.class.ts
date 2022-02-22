import { Weapon } from "./weapon.class";

export class Bow extends Weapon {
  constructor (baseDamage: number, baseDurability: number, value?: number) {
    super("Bow", baseDamage, baseDurability, 100, 250);
  }

  public polish(): void {
  }
}
