//import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//export default class Util extends LightningElement {

   const _showToast = function(_this,title,message,variant){          //u can use arrow function
        const eventRef = new ShowToastEvent({title,message,variant});
        _this.dispatchEvent(eventRef);
    }

    export{
        _showToast      //we can have multiple normal functions here by seperating with comma
    }



//}