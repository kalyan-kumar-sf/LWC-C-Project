import { LightningElement, wire } from 'lwc';
import {MessageContext, subscribe} from 'lightning/messageService';
import CASEMS from '@salesforce/messageChannel/caseMessageChannel__c';
// import getContactFields from '@salesforce/apex/CaseStudyController.getContactByCase';
export default class CaseDetails extends LightningElement {

    caseId;
    @wire(MessageContext) msgCtx;

     connectedCallback() {
        subscribe(this.msgCtx, CASEMS, (message)=>{
            //alert('message from detail'+message.conId);
            this.caseId = message.csId;
            console.log('case id via lms : '+this.caseId);
        });
    }
    // @wire(getContactFields, { recordId: '$caseId' })
    // wiredData({ error, data }) {
    //     alert('data regarding contact : '+data);
    //   if (data) {
    //     alert('case Data', JSON.stringify(data));
    //   } else if (error) {
    //      console.error('Error:', error);
    //   }
    // }



}