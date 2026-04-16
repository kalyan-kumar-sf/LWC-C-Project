import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CITY from '@salesforce/schema/Contact.MailingCity';
import COUNTRY from '@salesforce/schema/Contact.MailingCountry';
export default class ContactMapDemo extends LightningElement {

  mapMarkers = [];
  @api contactId;     //By using this contactId we should get the maliningCity and country, to do that we used wireAdapter here
  @wire(getRecord, { recordId: '$contactId', fields: [CITY, COUNTRY] })
  wiredData({ error, data }) {
    if (data) {
      console.log('Data', JSON.stringify(data));
      const city = getFieldValue(data, CITY);
      const country = getFieldValue(data, COUNTRY);
      this.mapMarkers = [
        {
          location: {
            City: city,
            Country: country
          },
          description: `this is city name ${city} from ${country}`,
          title:`You are viewing ${city}`
        }
      ]
    } else if (error) {
      console.error('Error:', error);
    }
  }

}