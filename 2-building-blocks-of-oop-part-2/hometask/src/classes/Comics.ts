import { Item } from "./Item";
import { Pages } from "./Pages";

export class Comic extends Item  {
    private author: string;
    private artist: string;


    constructor(title: string, author: string, artist:string, pages:Pages) {
        super(pages, title);
        this.author = author;
        this.artist = artist;
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
    public get getArtist(): string {
        return this.artist;
    }
    public set setArtist(value: string) {
        this.artist = value;
    }

    public toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.numPages}`
    }
   
    
}