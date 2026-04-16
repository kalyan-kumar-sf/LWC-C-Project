import { LightningElement, wire } from 'lwc';
import CITY from '@salesforce/schema/Contact.MailingCity';
import COUNTRY from '@salesforce/schema/Contact.MailingCountry';
import CMC from '@salesforce/messageChannel/contactMessageChannelDemo__c';
import {MessageContext, subscribe} from 'lightning/messageService';
import {NavigationMixin} from'lightning/navigation';
export default class ContactDetailDemo extends NavigationMixin(LightningElement) {

    contactId;
    city = CITY;
    country = COUNTRY;
    @wire(MessageContext) msgCtx;

    // We use connectedCallback() here because it is the lifecycle hook 
    // that runs when the component is inserted into the DOM (becomes active on the page), 
    // which is the correct time to start listening for LMS messages. Subscribing inside connectedCallback() 
    // ensures that the component is fully initialized, has its MessageContext available, 
    // and is ready to receive messages from the channel...

    connectedCallback() {
        subscribe(this.msgCtx, CMC, (message)=>{
            // alert('message from grid in detail page : '+message.conId);
            this.contactId = message.conId;
            
        });
    }
    editContact(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: this.contactId,
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }
    viewContact(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: this.contactId,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
    // editRecord(){
    //     this[NavigationMixin.Navigate]({
    //     type: 'standard__recordPage',
    //     attributes: {
    //         recordId: this.contactId,
    //         objectApiName: 'Contact',
    //         actionName: 'edit'
    //         }
    //     });
    // }
    
}