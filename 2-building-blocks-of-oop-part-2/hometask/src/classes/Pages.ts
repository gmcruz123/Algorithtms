import { Page } from "./Page";

export class Pages {

    private pages : Page[];
    constructor(pages : Page[]) {
        this.pages = pages;
    }

    get numPages() : number {
        return this.pages.length;
    }

    public addPage( page: Page ) : void {
        this.pages.push(page);
    }

    public getPage (index:number) : Page {
        return this.pages[index];
        
    }

 
}