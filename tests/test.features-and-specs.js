import FeaturesAndSpecs from './page.features-and-specs';
import { Selector } from 'testcafe';
import Utils from './utils';

let remoteUrl = 'http://local.caranddriver.com:3000';
let path = '/bmw/3-series/specs';

let testUrl = remoteUrl + path;
let subPage = testUrl + '/2017/3-series-Sedan/387943';

fixture `Features and Specs`
    .page `${testUrl}`;

// Page model
const page = new FeaturesAndSpecs();

// Tests
test('Global page props', async t => {
    let status = await Utils.getStatus(testUrl);
    let docURI = await t.eval(() => document.documentURI);
    let componentSelector = await page.componentSelector;
    let expectedTitle = 'BMW 3-series';
    let pageTitle = Selector('h1.sserif.f36.lh36.f42-dk.lh42-dk.ls-sm.mt6.mb4.mb5-tb.mb6-dk.fw-bold');
    let trimOptions = page.trimsSelectOption;
    let defaultTrim = page.trimsSelect.value;

    await t
        .expect(componentSelector.exists).ok()
        .expect(pageTitle.innerText).contains(expectedTitle);
        
    await t
        .expect(status).eql(200);

    await t
        .expect(page.styleSelectOption.exists).ok()
        .click(page.styleSelect)
        .click(page.styleSelectOption.nth(1))
        .wait(3000)
        .expect(t.eval(() => document.documentURI)).notEql(docURI)
        .click(page.trimsSelect)
        .click(page.trimsSelectOption.nth(1))
        .expect(t.eval(() => document.documentURI)).notEql(styleURI)
        .expect(page.trimsSelect.value).notEql(defaultTrim);
});

test.skip('accordian', async t => {
    let specsToggle = await new Selector('.toggle-btn').nth(0);
    let featuresBtn = await new Selector('a.button-secondary').withText('Features');

    let specsTable = await new Selector('table.collapsible').nth(0);
    let specsTableRows = await specsTable.find('tbody.none');
    await t
        .click(page.styleSelect)
        .click(page.styleSelectOption.withText('3-series Sedan'));
});

fixture `Features and Specs`
    .page `${subPage}`;

test('Navigate to subpage', async t => {
    let status = await Utils.getStatus(subPage);
    let componentSelector = await page.componentSelector;
    await t
        .expect(status).eql(200);
    await t
        .expect(componentSelector.exists).ok();
});
