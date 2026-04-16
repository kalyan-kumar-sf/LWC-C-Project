import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/DemoClass.getAccounts';

const cols = [
    {label : 'Name', fieldName: 'Name', type: 'text'},
    {label : 'Industry', fieldName: 'Industry', type: 'text'},
    {label : 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency'},
    {label : 'Rating', fieldName: 'Rating', type: 'text'}
];

export default class DemoTwo extends LightningElement {

    @wire(getAccounts) wiredAccounts;
    columnsList = cols;
    accountId;

    handleRowSelection(event){
        const rows = event.detail.selectedRows;
        if(rows.length>0){
            this.accountId = rows[0].Id;
            alert('Account Id : '+this.accountId);
        }
    }
    handleDeleteAccount(event){ //it should recieve an event cs we delete rec based on rec Id, it recieves rec Id

    }
}