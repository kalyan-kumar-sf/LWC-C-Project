import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/CaseStudyController.getContacts';
//LMS: step1 & step2
import CMC from '@salesforce/messageChannel/contactMessageChannel__c';
import {MessageContext, publish} from 'lightning/messageService';
// cdc step 1
import { refreshApex } from '@salesforce/apex';
import {subscribe} from 'lightning/empApi';

export default class ContactBrowser extends LightningElement {

    accountId='';
    contactList;
    contactId;
    wiredContacts;
//CDC step 2
  channelName='/data/ContactChangeEvent';
  //step 3:
connectedCallback() {
  this.handleSubscribe();
}

handleSubscribe(){
  subscribe(this.channelName, -1, ()=>{
    refreshApex(this.wiredContacts);
  }).then(response=>{
    console.log('success : '+response.channel);
  })
}
    //LMS : step3
    @wire(MessageContext) msgCtx;

    handleFilter(event){
        console.log('Browser : ' +event.detail);
        this.accountId = event.detail;
    }
    //Passing this accountId to apex and getting data from apex
    @wire(getContacts, { accId: '$accountId' })     //reactive - dynamic using '$
    wiredData(response) {
      this.wiredContacts= response;
      if (response.data) {
        console.log(JSON.stringify(response.data));
        this.contactList = response.data;
      } else if (response.error) {
         console.log('Error:' +error);
      }
    }
    
    handleContactClick(event){
        this.contactId = event.detail;
        // alert('contact id : '+this.contactId);

        //LMS : step4
        publish(this.msgCtx, CMC, {conId: this.contactId});
    }

}