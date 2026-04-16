import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/DemoClass.getAccount';
export default class AccountGideon extends LightningElement {

    options;
    accountId;
    @wire(getAccounts)
    wiredData({ error, data }) {
      if (data) {
        console.log(JSON.stringify(data));
        this.options = data.map((rec)=>{
           return { label: rec.Name, value: rec.Id }
        });
      } else if (error) {
        console.error('Error:', error);
      }
    }

    handleChange(event){
        this.accountId = event.target.value;
        const eventRef = new CustomEvent('account',{detail: this.accountId});
        this.dispatchEvent(eventRef); //dispatching account id to parent comp i.e--accConGideon
    }
    
}