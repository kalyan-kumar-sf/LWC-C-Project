import { LightningElement } from 'lwc';
export default class CaseStudyNavDemo extends LightningElement {

    item;
    handleNavs(event){
        this.item = event.detail.name;

        const eventRef = new CustomEvent('navigate', {detail: item});
        this.dispatchEvent(eventRef);
    }
}