import {Pages} from "../src/classes/Pages";
import {Page} from "../src/classes/Page";
import {Book} from '../src/classes/Book';

describe('Book', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const book = new Book('Harry Potter', 'J. K. Rowling', new Pages([
      new Page(1, 'with text', 'simple paper'),
      new Page(2, 'with text', 'simple paper'),
      new Page(3, 'with text', 'simple paper'),
      new Page(4, 'with text', 'simple paper')
    ]));

    for (const page of book) {
      console.log('pageee', page)
      expect(page).toEqual(`Book: Harry Potter by J. K. Rowling with number of pages: 4, here is page with text #${counter} and it\'s material is simple paper`);
      counter++;
    }
  });
});
