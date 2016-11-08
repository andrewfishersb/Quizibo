import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('art-quiz', 'Integration | Component | art quiz', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{art-quiz}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#art-quiz}}
      template block text
    {{/art-quiz}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
