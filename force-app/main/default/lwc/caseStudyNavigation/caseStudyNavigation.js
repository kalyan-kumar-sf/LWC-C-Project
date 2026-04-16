import { LightningElement } from 'lwc';
export default class CaseStudyNavigation extends LightningElement {

    handleSelect(event){
        const item = event.detail.name;
        console.log('item name : '+item);

        const eventRef = new CustomEvent('navigate',{detail: item});
        this.dispatchEvent(eventRef);
    }
}