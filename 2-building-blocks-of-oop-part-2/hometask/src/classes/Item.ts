import { pageIterable } from "../mixins/pagesIterable";
import { Pages } from "./Pages";

export abstract class Item  extends pageIterable(Object){
    protected title: string;

    constructor(pages: Pages, title: string) {
        super(pages);
        this.title = title;
    }
    public abstract toString() : string
}