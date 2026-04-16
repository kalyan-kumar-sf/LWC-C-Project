import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_ID from '@salesforce/schema/Case.ContactId';
import CITY from '@salesforce/schema/Contact.MailingCity';
import COUNTRY from '@salesforce/schema/Contact.MailingCountry';
export default class CaseMap extends LightningElement {

    @api caseId;
    // city and country should come from contact, so based on this caseId we should get the contactId then fetch the city, country
    
    
    conId;
    mapMarkers;
    @wire(getRecord, { recordId: '$caseId', fields: [CONTACT_ID] })
    wiredData({ error, data }) {
        if (data) {
            console.log(JSON.stringify(data));
            this.conId = getFieldValue(data, CONTACT_ID);
            console.log('con id from getRecId : ' + this.conId);
        } else if (error) {
            console.error('Error:', error);
        }
    }

    @wire(getRecord, { recordId: '$conId', fields:[CITY, COUNTRY] })
    wiredConData({ error, data }) {
        if (data) {
            alert(JSON.stringify(data));
            const city = getFieldValue(data, CITY);
            // alert('mailing city : '+this.city);
            const country = getFieldValue(data, COUNTRY);
            this.mapMarkers = [
                {
                    title: 'Contact Address',
                    location: {
                        
                        City: city,
                        Country: country
                    },
                    description:'something you are viewing'
                }
            ];
        } else if (error) {
            console.error('Error:', error);
        }
    }
}