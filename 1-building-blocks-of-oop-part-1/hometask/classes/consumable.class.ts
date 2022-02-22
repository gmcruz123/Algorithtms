import { Item } from './item.class';

export abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  public abstract eat(): string ;

  public use(): string {
    return '';
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public set setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }
}
