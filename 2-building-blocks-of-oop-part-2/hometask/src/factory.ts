import { Book } from './classes/Book'
import { Comic } from './classes/Comics'
import { Magazine } from './classes/Magazine'

let gadget = new Map();
gadget.set('book', Book);
gadget.set('comics', Comic)
gadget.set('magazine', Magazine)

export const createGadget = (type: string, ...properties: any) => {
        const GadgetType = gadget.get(type);
        return new GadgetType(properties);
};