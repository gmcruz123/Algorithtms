import { Item } from "./Item";
import { Pages } from "./Pages";

export class Book extends Item  {
    private author: string;


    constructor(title: string, author: string, pages:Pages) {
        super(pages, title);
        this.author = author;
    }

    public get getAuthor(): string {
        return this.author;
    }
    public set setAuthor(value: string) {
        this.author = value;
    }
    public get getTitle(): string {
        return this.title;
    }
    public set setTitle(value: string) {
        this.title = value;
    }


    public toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.numPages}`
    }
   
    
}