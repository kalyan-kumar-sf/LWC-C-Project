import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/DemoClass.getContacts';
import CMC from '@salesforce/messageChannel/contactMessageChannelDemo__c';
import {MessageContext, publish} from 'lightning/messageService';
export default class ContactBrowserDemo extends LightningElement {

    accountId='';
    selectedContactId;
    contactList;
    @wire(MessageContext) msgCxt;

    handleAccountId(event){
        this.accountId = event.detail;
    }
    @wire(getContacts, { accId: '$accountId' })     //reactive - dynamic using '$
    wiredData({ error, data }) {
      if (data) {
        console.log(JSON.stringify(data));
        this.contactList = data;
      } else if (error) {
         console.log('Error:' +error);
      }
    }
    handleContact(event){
      this.selectedContactId = event.detail;
      // console.log('contact id from grid : '+this.selectedContactId);
      publish(this.msgCxt, CMC, {conId: this.selectedContactId});
    }
    
}