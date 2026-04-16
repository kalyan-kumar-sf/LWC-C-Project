import { LightningElement, api } from 'lwc';
export default class ContactTileDemo extends LightningElement {

    @api contact;
    handleClick(){
        console.log(this.contact.Id);
        const conId = new CustomEvent('contactclick', {bubbles:true, composed:true, detail: this.contact.Id});
        this.dispatchEvent(conId);
    }
}