import { 
    Selector,
    ClientFunction
} from 'testcafe';

export default class FeaturesAndSpecsPage {
    constructor () {
        const namespace = 'cd-specs';
        // TODO: this.title.split(' ').forEach((item) => this.url
        this.componentSelector = Selector(`${namespace}`);
        this.title          = this.componentSelector.find('h1.page-title');

        this.styleSelect        = Selector('#selectStyle');
        this.styleSelectOption  = this.styleSelect.find('option');
        this.trimsSelect        = Selector('#selectTrim');
        this.trimsSelectOption  = this.trimsSelect.find('option');
    }
}
