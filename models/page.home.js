import { 
    Selector,
    ClientFunction
} from 'testcafe';

export default class HomePage {
    constructor () {
        const namespace = 'cd-home';
        this.componentSelector = Selector(`${namespace}`);
        
        // page elements
        this.title      = this.componentSelector.find('h1').child(0);
        this.hero       = Selector(this.componentSelector.find('.cd-carousel'));
        this.heroItems  = Selector(this.hero.find('.cd-slide'));
    }
}
