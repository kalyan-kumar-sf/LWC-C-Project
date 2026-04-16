import { LightningElement, api } from 'lwc';
export default class ContactGrid extends LightningElement {

    @api conList;
    selectedContactId;

    handlerClick(event){
        //Get the reference of <tr>
        const trRef = event.currentTarget;

        //Use getAttribute to fetch the value of the custome attribute
        this.selectedContactId = trRef.getAttribute('data-conid');

        // console.log('selected id on grid : '+this.selectedContactId);
        const eventRef=new CustomEvent('contactclick',{detail:this.selectedContactId});
        this.dispatchEvent(eventRef);
    }
}