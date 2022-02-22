import { Item } from "./item.class"

export abstract class Weapon extends Item {
  public static MODIFIER_CHANGE_RATE = 0.05;
  private baseDamage: number;
  private baseDurability: number;
  private damageModifier: number;
  private durabilityModifier: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.damageModifier = 0;
    this.durabilityModifier = 0;
  }

  public abstract polish(): void;

  public get getBaseDamage(): number {
    return this.baseDamage;
  }

  public get getDamageModifier(): number {
    return this.damageModifier;
  }

  public get getBaseDurability(): number {
    return this.baseDurability;
  }

  public get getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public get getDamage(): number {
    return 0;
  }

  public get getDurability(): number {
    return 0;
  }

  public set setBaseDamage(baseDamage: number) {
    this.baseDamage = baseDamage;
  }

  public set setDamageModifier(damageModifier: number) {
    this.damageModifier = damageModifier;
  }

  public set setBaseDurability(baseDurability: number) {
    this.baseDurability = baseDurability;
  }

  public set setDurabilityModifier(durabilityModifier: number) {
    this.durabilityModifier = durabilityModifier;
  }

  public use(): string {
    return `You use the ${this.getName}, dealing ${this.baseDamage} points of damage.`;
  }

  public toString(): string {
    return `${this.getName} − Value: ${this.getValue}, Weight: ${this.getWeight}, Damage: ${this.getDamage}, Durability: ${this.getDurability}%`;
  }
}
