import { LightningElement, api, wire } from 'lwc';
import CITY from '@salesforce/schema/Contact.MailingCity';
import COUNTRY from '@salesforce/schema/Contact.MailingCountry';
//LDS adapter
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
export default class ContactMap extends LightningElement {

    contactMapMarkers;
    @api contactId;
    @wire(getRecord, { recordId: '$contactId', fields:[CITY, COUNTRY] })
    wiredGetRecord({ error, data }) {
      if (data) {
        console.log('Data : '+JSON.stringify(data));
        const city = getFieldValue(data,CITY);
        const country = getFieldValue(data,COUNTRY);
        this.contactMapMarkers = [
            {
                title:'Contact Address',
                location:{
                    City:city,
                    Country:country,
                 },
                 description:`You are viewing ${city} is in ${country}`
            },
        ]
        // console.log('Data', data);
      } else if (error) {
         console.error('Error:', error);
      }
    }

    // constructor(){
    //     super();
    //     this.contactMapMarkers=[
    //         {
    //             title:'Bangalore Location',
    //             location:{
    //                 City:'Bangalore',
    //                 Country:'India',
    //             },
    //             description:'You are viewing Bangalore location'
    //         },
    //         {
    //             title:'Chennai Location',
    //             location:{
    //                 City:'BangChennaialore',
    //                 Country:'India',
    //             },
    //             description:'You are viewing Chennai location'
    //         }
    //     ]
    // }
}