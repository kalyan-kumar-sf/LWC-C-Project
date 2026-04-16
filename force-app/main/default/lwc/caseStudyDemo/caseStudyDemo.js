import { LightningElement } from 'lwc';
export default class CaseStudyDemo extends LightningElement {

    item;
    handleSelect(event){
        this.item = event.detail;
    }
    get isContact(){
      return this.item === 'contact'; 
    }
    get isCals(){
      return this.item === 'calc'; 
    }
    get isDeals(){
      return this.item === 'deals'; 
    }
    get isReport(){
      return this.item === 'report'; 
    }
    get isGraph(){
      return this.item === 'graph'; 
    }


}