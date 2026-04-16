import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'; 
export default class OpportunityCompOne extends LightningElement {

    @wire(getAllOpportunities) wireOpportunities;
    
    
}