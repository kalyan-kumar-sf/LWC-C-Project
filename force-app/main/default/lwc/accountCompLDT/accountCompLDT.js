import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/OpportunityController.getAccounts';
import deleteAccount from '@salesforce/apex/OpportunityController.deleteAccount';
import {refreshApex} from '@salesforce/apex';
import {deleteRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {_showToast} from 'c/util';
const COLS = [
    { label: 'Name', fieldName: 'Name', type:'text'},
    { label: 'Industry', fieldName: 'Industry', type:'text'},
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type:'currency'},
    { label: 'Rating', fieldName: 'Rating', type:'text'}
];
export default class AccountCompLDT extends LightningElement {

    @wire(getAccounts) wiredAccounts;
    columnsList = COLS;
    accountId; //To store the account id
    
    handleRowSelection(event){
        const rows = event.detail.selectedRows; //LDT has this property, it returns array

        if(rows.length > 0){
            this.accountId = rows[0].Id;
            alert('Account id :: '+this.accountId);
            //console.log('Account id :: '+this.accountId);
        }
    }
    handleClick(event){
        deleteAccount({accId : this.accountId})
        .then(()=>{
            //alert('Account has been deleted successfully');
            this.displyToast('COMPLETED','Account has been deleted successfully','success');
            //1. Get the refernece of LDT
            const ldtRef = this.template.querySelector('lightning-datatable');
            //2. Assign selectedRows to an empty array, how do we do this?
            ldtRef.selectedRows = [];
            refreshApex(this.wiredAccounts); //Pass entire dataset (data, error)
        })
        .catch((issue)=>{
            //alert(issue.body.message);
            _showToast(this,'INCOMPLETE',issue.body.message,'error');
        })
    }

    displyToast(title,message,variant){
        const eventRef = new ShowToastEvent({title,message,variant});
        this.dispatchEvent(eventRef);
    }
}