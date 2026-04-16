import { LightningElement, api, wire } from 'lwc';
import getAccountss from '@salesforce/apex/DemoClass.getAccountss'
export default class ShowAccountDetailGideon extends LightningElement {

    @api accountId;
    account;
    @wire(getAccountss, { accId: '$accountId' })
    wiredData({ error, data }) {
      if (data) {
        console.log(JSON.stringify(data));
        this.account = data;
      } else if (error) {
         console.error('Error:', error);
      }
    }
}