import { Weapon } from "./weapon.class";

export class Sword extends Weapon {
  constructor (baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('Sword', baseDamage, baseDurability, value, weight);
  }

  public polish(): void {}
}
