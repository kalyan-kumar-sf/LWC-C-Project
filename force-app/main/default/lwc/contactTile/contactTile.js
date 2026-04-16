import { LightningElement, api } from 'lwc';
export default class ContactTile extends LightningElement {

    @api contact;

    handleClick(){
        console.log('have clicked : '+this.contact.Id);
        const eveRef = new CustomEvent('contactclick',{bubbles: true, composed: true, detail: this.contact.Id});
        this.dispatchEvent(eveRef);
    }
}