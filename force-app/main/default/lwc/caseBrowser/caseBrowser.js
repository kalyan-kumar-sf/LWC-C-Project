import { LightningElement, wire } from 'lwc';
import getCases from '@salesforce/apex/CaseStudyController.getCases';
import {MessageContext, publish} from 'lightning/messageService';
import CASEMS from '@salesforce/messageChannel/caseMessageChannel__c';

export default class CaseBrowser extends LightningElement {
    
    accountId='';
    caseList;
    caseId;
    // @wire(apexMethodName)
    // wiredData({ error, data }) {
    //   if (data) {
    //     console.log('Data', data);
    //   } else if (error) {
    //      console.error('Error:', error);
    //   }
    // }
    @wire(MessageContext)msgCtx;
    
    @wire(getCases, { accId: '$accountId' })
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', JSON.stringify(data));
        this.caseList = data;
      } else if (error) {
        console.error('Error:', error);
      }
    }
    handleCases(event){
        this.accountId = event.detail;
    }
    handleClick(event){
        this.caseId = event.detail;
        console.log('case id : '+this.caseId);
        publish(this.msgCtx, CASEMS, {csId: this.caseId});
    }

}