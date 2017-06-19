import HomePage from './page.home';
import { Selector, ClientFunction } from 'testcafe';

let testUrl = 'http://local.caranddriver.com:3000';

fixture `Home`
    .page `${testUrl}`;

// Page model
const page = new HomePage();

// Tests
test('Global page props', async t => {
    const docURI = await t.eval(() => document.documentURI);
    await t
        .expect(page.heroItems.nth(5).exists).ok();
});
