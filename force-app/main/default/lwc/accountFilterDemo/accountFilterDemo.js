import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/DemoClass.getAccounts';
export default class AccountFilterDemo extends LightningElement {

    options;
    accountId;
    @wire(getAccounts)
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
        this.options = data.map((account)=>{
            return{
                label:account.Name,
                value:account.Id
            }
        })
      } else if (error) {
        console.error('Error:', error);
      }
    }
    handleChange(event){
        this.accountId = event.target.value;

        const eventRef = new CustomEvent('select',{detail: this.accountId});
        this.dispatchEvent(eventRef);
        
    }
}