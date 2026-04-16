import { LightningElement, api } from 'lwc';
export default class ContactGridDemo extends LightningElement {

    @api conList;
    selectedContactId;
    handleClick(event){
        const eveRef = event.currentTarget;
        this.selectedContactId = eveRef.getAttribute('data-conid');
        console.log('con id : '+this.selectedContactId);

        const eventRef = new CustomEvent('contactclick', {detail: this.selectedContactId});
        this.dispatchEvent(eventRef);
    }

}