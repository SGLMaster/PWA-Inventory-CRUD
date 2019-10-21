import { html, fixture, expect } from '@open-wc/testing';

import '../simple-invetory-crud.js';

describe('SimpleInvetoryCrud', () => {
  it('has page "main" by default', async () => {
    const el = await fixture(html`
      <simple-invetory-crud></simple-invetory-crud>
    `);

    expect(el.page).to.equal('main');
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders page-one if page property is set to pageOne', async () => {
    const el = await fixture(html`
      <simple-invetory-crud page="pageOne"></simple-invetory-crud>
    `);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-one></page-one>
    `);
  });

  it('changes the page if a menu link gets clicked', async () => {
    const el = await fixture(html`
      <simple-invetory-crud></simple-invetory-crud>
    `);
    el.shadowRoot.querySelectorAll('header a')[2].click();

    expect(el.page).to.equal('about');
  });
});
