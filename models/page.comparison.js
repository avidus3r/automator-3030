import { 
    Selector,
    ClientFunction
} from 'testcafe';

export default class ComparisonPage {
    constructor () {
        this.setStorage = ClientFunction(() => localStorage.setItem('_comparison', JSON.stringify({value:{vehicles:[379808,388154,382983], locked: false }, timestamp: Date.now()})));
        this.title          = Selector('.top-vehicle-card h1');
        this.comparisonView = {
            container: Selector('.w100p.flex.flex-row-nm.flex-nowrap.flex-shrink.pos-rel'),
            nav: {
                prev: Selector('.overflow-nav .prev'),
                next: Selector('.overflow-nav .next')
            }
        };
        
        this.compareComponent = Selector('cd-comparison');
        this.vehicleCompareCard = {
            container: Selector('.overflow-nav .next'),
            clickable: {
                lockvehicle: Selector('.overflow-nav .next'),
            }
        }
        this.addVehicleCard     = Selector('cd-add-car-card');
        this.addVehicleModal    = Selector('#add-vehicle-modal');
        this.addVehicleCardBtn  = Selector(this.addVehicleCard.find('button'));
        this.makesSelect        = Selector('#selectedMake');
        this.makesSelectOption  = this.makesSelect.find('option');
        this.modelsSelect       = Selector('#selectedModel');
        this.modelsSelectOption = this.modelsSelect.find('option');
        this.styleSelect        = Selector('#selectedStyle');
        this.styleSelectOption  = this.styleSelect.find('option');
        this.trimsSelect        = Selector('#selectedTrim');
        this.trimsSelectOption  = this.trimsSelect.find('option');
        this.addVehicleBtn      = this.addVehicleModal.find('button');
    }
}
