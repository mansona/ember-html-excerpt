import { it, describe } from 'vitest';
import { excerpt } from '../src/helpers/excerpt.js';
import { expect } from 'vitest';

const cases = [
  {
    name: 'Paragraphs',
    input: `<p>Happy New Year and welcome to my brand new blog. To kick off the year this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take something from it, please let me know in the comments.</p>`,
    expected: `Happy New Year and welcome to my brand new blog. To kick off the year this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take`,
  },
  {
    name: 'Headers and Paragraphs',
    input: `<h1>Happy New Year and welcome</h1>
<p>to my brand new blog. To kick off the year this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take something from it, please let me know in the comments.</p>`,
    expected: `Happy New Year and welcome to my brand new blog. To kick off the year this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take`,
  },
  {
    name: 'Emphasis and italics',
    input: `<p>Happy New Year and <em>welcome to my brand</em> new blog. To kick off <i>the year</i> this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take something from it, please let me know in the comments.</p>`,
    expected: `Happy New Year and welcome to my brand new blog. To kick off the year this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take`,
  },
];

describe('excerpt helper function', function () {
  for (let item of cases) {
    it(item.name, function () {
      expect(excerpt(item.input)).to.equal(item.expected);
    });
  }
});
