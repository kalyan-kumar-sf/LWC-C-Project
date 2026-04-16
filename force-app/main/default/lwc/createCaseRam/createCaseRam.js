import { LightningElement } from 'lwc';
import createCaseViaLwc from '@salesforce/apex/CaseController.createCaseViaLwc';
export default class CreateCaseRam extends LightningElement {

    status;
    priority;


    get statusOptions() {
        return [
            { label: 'New', value: 'New' },
            { label: 'Working', value: 'Working' },
            { label: 'Escalated', value: 'Escalated' },
            { label: 'Closed', value: 'Closed' }
        ];
    }
    get priorityOptions() {
        return [
            { label: 'High', value: 'High' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Low', value: 'Low' }
        ];
    }

    // handleClick(){
    //     createCaseViaLwc(){

    //     }
    // }

    handlePriority(event){
        this.priority = event.target.value;
    }
    handleStatus(event){
        this.status = event.target.value;
    }
}