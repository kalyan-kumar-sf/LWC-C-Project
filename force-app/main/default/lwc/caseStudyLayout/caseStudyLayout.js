import { LightningElement } from 'lwc';
export default class CaseStudyLayout extends LightningElement {

    item;

    handleNavigate(event){
        this.item = event.detail;
        console.log('data : '+this.item);
    }

    // Define getter methods to conditionally display the comps

    get isContact(){
       return this.item === 'contacts';
    }
    get isCalc(){
        return this.item === 'calc';
    }
    get isReport(){
        return this.item === 'report';
    }
    get isDeals(){
        return this.item === 'deals';
    }
    get isGraph(){
        return this.item === 'graph';
    }
}