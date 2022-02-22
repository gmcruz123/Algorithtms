import { Comparable } from '../interfaces/comparable.interface';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    private static numberOfItems: number;
    private id: number = 0;
    private value: number;
    private name: string;
    private weight: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = id;
        Item.numberOfItems = counter;
        id++;
        counter++;
    }


    public compareTo(other: Item): number {
        return 0;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public get getId(): number {
        return this.id;
    }

    public get getValue(): number {
        return this.value;
    }

    public get getName(): string {
        return this.name;
    }

    public get getWeight(): number {
        return this.weight;
    }

    public set setValue(newValue: number) {
        this.value = newValue;
    }

    public set setName(newName: string) {
        this.name = newName;
    }

    public set setWeight(newWeight: number) {
        this.weight = newWeight;
    }

    public static reset(): void {
        counter = 0;
    }

    public abstract use(): string;

}
