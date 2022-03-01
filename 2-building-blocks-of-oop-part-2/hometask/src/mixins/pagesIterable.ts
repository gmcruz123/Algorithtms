import { Pages } from "../classes/Pages";

export const pageIterable = (superclass: ObjectConstructor) => class extends superclass  implements Iterable<string> {
   
    protected pages : Pages ;

    constructor(pages: Pages) {
        super();
        this.pages = pages;
    }

    *[Symbol.iterator]() {

        if(this.pages.numPages === 0)  yield `There're no pages`
        
        for (let index = 0; index < this.pages.numPages; index++) {
            yield `${this.toString()}, ${this.pages.getPage(index).toString()}`
        }
         
      }

}