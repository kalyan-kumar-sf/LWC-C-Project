import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CaseStudyController.getAccounts';
export default class AccountFilter extends LightningElement {

    options;

    @wire(getAccounts)
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
        this.options = data.map((acc)=>{
            return {
                label: acc.Name,
                value: acc.Id
            }
        });
      } else if (error) {
        console.error('Error:', error);
      }
    }
    handleChange(event){
        //alert(event.target.value);
        console.log(event.target.value);

        const eventRef = new CustomEvent('filter', {detail: event.target.value});
        this.dispatchEvent(eventRef);  //Sending this accountId to the parent comp contactBrowser
        
    }
}