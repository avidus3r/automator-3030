import ComparisonPage from './page.comparison-page';
import { Selector } from 'testcafe';

Error.stackTraceLimit = Infinity;

fixture `Vehicle Comparison Tool`
    .page `http://local.caranddriver.com:3000/comparison`;

// Page model
const page = new ComparisonPage();

// Tests
test('Global page props/elements', async t => {
    let compareComponent = await page.compareComponent;
    let addVehicleCardBtn = await page.addVehicleCardBtn;
    await t
        .expect(compareComponent.exists).ok()
        .expect(page.addVehicleCard.exists).ok()
        .expect(page.title.innerText).contains('Vehicle Comparison');
});

test.skip
    .before(async t => {
        page.setStorage();
    })
    ('Add a Vehicle', async t => {
    await t
    .navigateTo('http://local.caranddriver.com/comparison');
    await page.setStorage();
    await t
        .click(Selector('button').withText('Add Vehicle'));
    const modalElement = await page.addVehicleModal.with({visibilityCheck: true })();
});

test('Add vehicles', async t => {
    await t
        .wait(2000)
        .expect(page.compareComponent.exists).ok()
        .expect(page.addVehicleCard.exists).ok()
        .expect(page.addVehicleCardBtn.exists).ok()
        .click(page.addVehicleCardBtn)
        .expect(page.addVehicleModal.exists).ok()
        .click(page.makesSelect)
        .click(page.makesSelectOption.withText('BMW'))
        .click(page.modelsSelect)
        .click(page.modelsSelectOption.withText('3-series'))
        .click(page.styleSelect)
        .click(page.styleSelectOption.withText('3-series Sedan'))
        .click(page.trimsSelect)
        .click(page.trimsSelectOption.nth(0))
        .click(page.addVehicleBtn)
        .expect(page.compareComponent.find('.vehicle-card').exists).ok()
        .click(page.addVehicleCardBtn)
        .expect(page.addVehicleModal.exists).ok()
        .click(page.makesSelect)
        .click(page.makesSelectOption.withText('BMW'))
        .click(page.modelsSelect)
        .click(page.modelsSelectOption.withText('3-series'))
        .click(page.styleSelect)
        .click(page.styleSelectOption.withText('3-series Sedan'))
        .click(page.trimsSelect)
        .click(page.trimsSelectOption.nth(0))
        .click(page.addVehicleBtn)
        .expect(page.compareComponent.find('.vehicle-card').exists).ok()
        .click(page.addVehicleCardBtn)
        .expect(page.addVehicleModal.exists).ok()
        .click(page.makesSelect)
        .click(page.makesSelectOption.withText('BMW'))
        .click(page.modelsSelect)
        .click(page.modelsSelectOption.withText('3-series'))
        .click(page.styleSelect)
        .click(page.styleSelectOption.withText('3-series Sedan'))
        .click(page.trimsSelect)
        .click(page.trimsSelectOption.nth(0))
        .click(page.addVehicleBtn)
        .expect(page.compareComponent.find('.vehicle-card').exists).ok()
});

// test('Text typing basics', async t => {
//     await t
//         .typeText(page.nameInput, 'Peter')                      // Type name
//         .typeText(page.nameInput, 'Paker', { replace: true })   // Replace with last name
//         .typeText(page.nameInput, 'r', { caretPos: 2 })         // Correct last name
//         .expect(page.nameInput.value).eql('Parker');            // Check result
// });


// test('Click an array of labels and then check their states', async t => {
//     for (const feature of page.featureList) {
//         await t
//             .click(feature.label)
//             .expect(feature.checkbox.checked).ok();
//     }
// });


// test('Dealing with text using keyboard', async t => {
//     await t
//         .typeText(page.nameInput, 'Peter Parker')           // Type name
//         .click(page.nameInput, { caretPos: 5 })             // Move caret position
//         .pressKey('backspace')                              // Erase a character
//         .expect(page.nameInput.value).eql('Pete Parker')    // Check result
//         .pressKey('home right . delete delete delete')      // Pick even shorter form for name
//         .expect(page.nameInput.value).eql('P. Parker');     // Check result
// });


// test('Moving the slider', async t => {
//     const initialOffset = await page.slider.handle.offsetLeft;

//     await t
//         .click(page.triedTestCafeCheckbox)
//         .dragToElement(page.slider.handle, page.slider.tick.withText('9'))
//         .expect(page.slider.handle.offsetLeft).gt(initialOffset);
// });


// test('Dealing with text using selection', async t => {
//     await t
//         .typeText(page.nameInput, 'Test Cafe')
//         .selectText(page.nameInput, 7, 1)
//         .pressKey('delete')
//         .expect(page.nameInput.value).eql('Tfe');   // Check result
// });


// test('Handle native confirmation dialog', async t => {
//     await t
//         .setNativeDialogHandler(() => true)
//         .click(page.populateButton);

//     const dialogHistory = await t.getNativeDialogHistory();

//     await t.expect(dialogHistory[0].text).eql('Reset information before proceeding?');

//     await t
//         .click(page.submitButton)
//         .expect(page.results.innerText).contains('Peter Parker');
// });


// test('Pick option from select', async t => {
//     await t
//         .click(page.interfaceSelect)
//         .click(page.interfaceSelectOption.withText('Both'))
//         .expect(page.interfaceSelect.value).eql('Both');
// });


// test('Filling a form', async t => {
//     // Fill some basic fields
//     await t
//         .typeText(page.nameInput, 'Bruce Wayne')
//         .click(page.macOSRadioButton)
//         .click(page.triedTestCafeCheckbox);

//     // Let's leave a comment...
//     await t
//         .typeText(page.commentsTextArea, "It's...")
//         .wait(500)
//         .typeText(page.commentsTextArea, '\ngood');

//     // I guess, I've changed my mind
//     await t
//         .wait(500)
//         .selectTextAreaContent(page.commentsTextArea, 1, 0)
//         .pressKey('delete')
//         .typeText(page.commentsTextArea, 'awesome!!!');

//     // Let's submit our form
//     await t
//         .wait(500)
//         .click(page.submitButton)
//         .expect(page.results.innerText).contains('Bruce Wayne');
// });
