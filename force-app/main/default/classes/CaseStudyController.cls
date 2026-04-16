/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : CaseStudyController
 * Author          : <YourName>
 * Created Date    : Feb 19, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Feb 19, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Feb 19, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public with sharing class CaseStudyController {

	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts() {
		return [SELECT Name FROM Account
							WITH SECURITY_ENFORCED];
	}
	@AuraEnabled(cacheable=true)
	public static List<Contact> getContacts(String accId){
		// here we have to query dynamically

		String queryString;

		if(accId == ''){
			queryString = 'SELECT FirstName,LastName,Email,Phone FROM Contact';
		}else{
			queryString = 'SELECT FirstName,LastName,Email,Phone FROM Contact WHERE AccountId =:accId';
		}
		return Database.query(queryString);
	}
	@AuraEnabled(cacheable=true)
	public static List<Case> getCases(string accId){
		String queryString;

		if(accId == ''){
			queryString = 'SELECT ContactId, Subject, Status FROM Case';
		}else{
			queryString = 'SELECT ContactId, Subject, Status FROM Case WHERE AccountId =:accId';
		}
		return Database.query(queryString);
	}
	@AuraEnabled(cacheable=true)
	public static List<Contact> getContactByCase(String caseId){
		String queryString;
		queryString = 'SELECT ContactId, Contact.MailingCity, Contact.MailingCountry FROM Case WHERE Id = :caseId';
		return Database.query(queryString);

    }

}