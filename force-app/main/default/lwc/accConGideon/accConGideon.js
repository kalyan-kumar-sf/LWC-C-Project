import { LightningElement } from 'lwc';
export default class AccConGideon extends LightningElement {

    accountId;
    handleAccount(event){
        this.accountId = event.detail;
        console.log('acc id : '+this.accountId);
    }
}