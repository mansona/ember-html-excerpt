import { module, test } from 'qunit';
import { visit, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | basic', function (hooks) {
  setupApplicationTest(hooks);

  test('basic examples in a template', async function (assert) {
    await visit('/');

    const parragraphs = await findAll('p');

    for (let p of parragraphs) {
      assert
        .dom(p)
        .hasText(
          `Happy New Year and welcome to my brand new blog. To kick off the year this is a post with my own take on New Year's Resolutions, which is two part Computer Scientist and one part pragmatist. Hopefully you will find it useful and be able to to take`
        );
    }
  });
});
