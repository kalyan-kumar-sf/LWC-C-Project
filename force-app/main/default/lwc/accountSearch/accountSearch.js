import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchController.getAccounts';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    { label: 'Rating', fieldName: 'Rating', type: 'text' },
];
export default class AccountSearch extends LightningElement {

    accountName;
    accountList=[];
    columnsList = columns;
    handleSearch(event){
        this.accountName = event.target.value.trim();
        
        console.log('account name : '+this.accountName);
    }
    @wire(getAccounts, { accName: '$accountName' })
    wiredData({ error, data }) {
      if (data) {
        
        this.accountList = data;
        console.log(this.accountList);
      } else if (error) {
         console.error('Error:', error);
      }
    }
    get hasRecords() {
        return this.accountName && this.accountList.length > 0;
    
    }
    get noRecords(){  
      return this.accountName && this.accountList.length === 0;
    }

}