import { LightningElement, wire } from 'lwc';
//LMS: step1 & step2
import CMC from '@salesforce/messageChannel/contactMessageChannel__c';
import {MessageContext, subscribe} from 'lightning/messageService';
import {NavigationMixin} from 'lightning/navigation';
import CITY from '@salesforce/schema/Contact.MailingCity';
import COUNTRY from '@salesforce/schema/Contact.MailingCountry';
export default class ContactDetails extends NavigationMixin(LightningElement) {

    // Static schema
    city = CITY;
    country = COUNTRY;

    contactId;
//LMS : step3
    @wire(MessageContext) msgCtx;

    //LMS : step4
    connectedCallback() {
        subscribe(this.msgCtx, CMC, (message)=>{
            //alert('message from detail'+message.conId);
            this.contactId = message.conId;
        });
    }
    editRecord(){
        this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.contactId,
            objectApiName: 'Contact',
            actionName: 'edit'
            }
        });
    }
    viewRecord(){
        this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.contactId,
            objectApiName: 'Contact',
            actionName: 'view'
            }
        });
    }
 
}