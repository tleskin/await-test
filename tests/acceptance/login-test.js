import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'await-test/tests/helpers/start-app';

module('Acceptance | login', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
