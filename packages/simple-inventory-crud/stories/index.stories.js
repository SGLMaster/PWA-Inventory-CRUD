import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { SimpleInventoryCrud } from '../src/SimpleInventoryCrud.js';
import '../simple-inventory-crud.js';

storiesOf('simple-invetory-crud', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(SimpleInventoryCrud))
  .add(
    'Alternative Title',
    () => html`
      <simple-invetory-crud .title=${'Something else'}></simple-invetory-crud>
    `,
  );
