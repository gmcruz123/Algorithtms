import {Pages} from "../src/classes/pages";
import {Page} from "../src/classes/Page";
import {Comic} from "../src/classes/Comics";

describe('Comics', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const comics = new Comic('Spider-Man', 'Stan Lee', 'some author', new Pages([
      new Page(1, 'with images', 'glossy paper'),
      new Page(2, 'with images', 'glossy paper')
    ]));

    for (const page of comics) {
      expect(page).toEqual(`Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #${counter} and it\'s material is glossy paper`);
      counter++;
    }
  });
});
