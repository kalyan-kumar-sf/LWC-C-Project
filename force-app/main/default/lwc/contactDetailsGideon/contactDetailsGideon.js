import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/DemoClass.getRelatedContacts';
export default class ContactDetailsGideon extends LightningElement {

    @api accountId;
    contactList=[];
    @wire(getRelatedContacts, { accId: '$accountId' })
    wiredData({ error, data }) {
      if (data) {
        console.log('con data based on acc : '+JSON.stringify(data));
        this.contactList = data;
      } else if (error) {
         console.error('Error:', error);
      }
    }
    get consGreater(){
       return this.contactList.length > 0;
    }
}