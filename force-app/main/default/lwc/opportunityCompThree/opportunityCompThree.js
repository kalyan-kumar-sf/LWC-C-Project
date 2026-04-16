import { LightningElement } from 'lwc';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities';
import getLostOpportunities from '@salesforce/apex/OpportunityController.getLostOpportunities';
export default class OpportunityCompThree extends LightningElement {

    oppList;

    loadWonDeals(){
        //Call the apex method explicitly
        getWonOpportunities()       //response name can be anything, this method return type JS promise
        .then((data)=>{
            this.oppList = data;
        })
        .catch((issue)=>{
            alert(JSON.stringify(issue.body.message));
        })           
    }
    loadLostDeals(){
        getLostOpportunities()       //response name can be anything, this method return type JS promise
        .then((data)=>{
            this.oppList = data;
        })
        .catch((issue)=>{
            alert(JSON.stringify(issue.body.message));
        })
    }
}