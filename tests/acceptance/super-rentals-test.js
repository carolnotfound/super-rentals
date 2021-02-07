import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting initial page', async (assert) => {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('Welcome to Super Rentals!');
  });

  test('visiting about page', async (assert) => {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('About Super Rentals');
  });

  test('visiting contact page', async (assert) => {
    await visit('/get-in-touch');

    assert.equal(currentURL(), '/get-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    assert.dom('h2').hasText('Contact Us');
  });

  test('navigating through pages', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('.jumbo a.button').hasText('About Us');

    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
    assert.dom('.jumbo a.button').hasText('Contact Us');

    await click('.jumbo a.button');

    assert.equal(currentURL(), '/get-in-touch');
    assert.dom('.jumbo a.button').hasText('About Us');

    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });
});
