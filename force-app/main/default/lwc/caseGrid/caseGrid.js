import { LightningElement, api } from 'lwc';
export default class CaseGrid extends LightningElement {

    @api caseList;
    selectedCaseId;
    handlerClick(event){
        this.selectedCaseId = event.currentTarget.getAttribute('data-caseid');
        
        console.log('case id in grid : '+this.selectedCaseId);

        const caseIdRef = new CustomEvent('select',{detail: this.selectedCaseId});
        this.dispatchEvent(caseIdRef); //sending this caseId to the caseBrowser
    }


}