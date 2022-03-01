import { Item } from "./Item";
import { Pages } from "./Pages";

export class Magazine extends Item  {
    

    constructor(title: string, pages:Pages) {
        super(pages, title);
    }

    public get getTitle(): string {
        return this.title;
    }
    public set setTitle(value: string) {
        this.title = value;
    }


    public toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.numPages}`
    }
   
    
}