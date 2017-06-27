import { Selector } from 'testcafe';
import Utils from '../lib/utils';

export default class FeaturesAndSpecsPage {
    constructor () {
        const namespace = 'cd-specs';
        // TODO: this.title.split(' ').forEach((item) => this.url
        this.componentSelector = Utils.getElement(`${namespace}`);
        // this.title          = this.componentSelector.find('h1.page-title');

        this.styleSelect        = Utils.getElement('#selectStyle');
        this.styleSelectOption  = Utils.findElement('option', this.styleSelect);
        this.trimsSelect        = Utils.getElement('#selectTrim');
        this.trimsSelectOption  = Utils.findElement('option', this.trimsSelect);
    }
}
