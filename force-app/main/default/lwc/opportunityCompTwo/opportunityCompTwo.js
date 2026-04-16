import { LightningElement, wire } from 'lwc';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities';
export default class OpportunityCompTwo extends LightningElement {

    oppList;

    // @wire(getWonOpportunities)
    // wiredGetWonOpportunities({data,error}){
    //     if(data){
    //         this.oppList = []; //Best practice
    //         data.forEach(function(opp){ //callback function or nested function so we will not have access to "this" context
    //             const obj = {
    //                 Name : opp.Name,
    //                 StageName : opp.StageName, 
    //                 CloseDate : opp.CloseDate, 
    //                 Amount : opp.Amount,
    //                 Commission : opp.Amount * .10
    //             };
    //             console.log(JSON.stringify(obj));
    //             this.oppList.push(obj); //pushing/adding array of records to the oppList array to display over UI
    //         });
            
    //     }else if(error){
    //         // alert('Failed');
    //     }
    // }

    //Approach 1: Local variable approach
    @wire(getWonOpportunities)
    wiredGetWonOpportunities({data,error}){
        if(data){
            
            this.oppList = []; //Best practice
            let _this = this;   //this refering to what here?? to current comp instance/object(js class)

            data.forEach(function(opp){ //callback function or nested function so we will not have access to "this" context
                const obj = {
                    Name : opp.Name,
                    StageName : opp.StageName, 
                    CloseDate : opp.CloseDate, 
                    Amount : opp.Amount,
                    Commission : opp.Amount * .10
                };
                console.log(JSON.stringify(obj));
                _this.oppList.push(obj); //pushing/adding array of records to the oppList array to display over UI
            });
            
        }else if(error){
            // alert('Failed');
        }
    }

    //Approach 2: Using bind() method to bind the nested function with "this" context
    @wire(getWonOpportunities)
    wiredGetWonOpportunities({data,error}){
        if(data){
            
            this.oppList = []; //Best practice
            data.forEach(function(opp){ //callback function or nested function so we will not have access to "this" context
                const obj = {
                    Name : opp.Name,
                    StageName : opp.StageName, 
                    CloseDate : opp.CloseDate, 
                    Amount : opp.Amount,
                    Commission : opp.Amount * .10
                };
                console.log(obj);
                console.log(JSON.stringify(obj));
                this.oppList.push(obj); //pushing/adding array of records to the oppList array to display over UI
            }.bind(this));
            
        }else if(error){

            // alert('Failed');
        }
    }

    //Approach 3: using arraow function
    @wire(getWonOpportunities)
    wiredGetWonOpportunities({data,error}){
        if(data){
            this.oppList = []; //Best practice
            data.forEach(opp=>{ //callback function or nested function so we will not have access to "this" context
                const obj = {
                    Name : opp.Name,
                    StageName : opp.StageName, 
                    CloseDate : opp.CloseDate, 
                    Amount : opp.Amount,
                    Commission : opp.Amount * .10
                };
                console.log(JSON.stringify(obj));
                this.oppList.push(obj); //pushing/adding array of records to the oppList array to display over UI
            });
            
        }else if(error){
            // alert('Failed');
        }
    }











    // constructor(){
    //     super();
    //     alert('From constructor');
    // }
    // connectedCallback() {
    //     alert('From connectedCallback');
    // }

}