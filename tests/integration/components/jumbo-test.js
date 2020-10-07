import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | jumbo", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders well with appropriate yields", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<Jumbo />`);
    assert.equal(this.element.textContent.trim(), "");

    await render(hbs`
      <Jumbo>
        template block text
      </Jumbo>
    `);

    assert.equal(this.element.textContent.trim(), "template block text");
    await render(hbs`
    <Jumbo>
      This is testing ther rendering options
    </Jumbo>
  `);

    assert.equal(
      this.element.textContent.trim(),
      "This is testing ther rendering options"
    );
  });

  test("it renders the content inside a jumbo header with a tomster", async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom(".jumbo").exists();
    assert.dom(".jumbo").hasText("Hello World");
    assert.dom(".jumbo .tomster").exists();
  });
});
