/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : DemoClass
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

public with sharing class DemoClass {

	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts() {
		return [SELECT Name, Industry, AnnualRevenue, Rating FROM Account WITH SECURITY_ENFORCED];
	}
	@AuraEnabled(cacheable=true)
	public static Account getAccountss(String accId) {
		return [SELECT Name, Industry, AnnualRevenue, Rating FROM Account WHERE Id =:accId WITH SECURITY_ENFORCED];
	}
	@AuraEnabled
	public static void delteAccount(){

	}
	@AuraEnabled(cacheable=true)
	public static List<Account> getAccount(){
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
	public static List<Contact> getRelatedContacts(String accId){

		return [SELECT FirstName,LastName,Email,Phone FROM Contact WHERE AccountId =:accId];
	}

}