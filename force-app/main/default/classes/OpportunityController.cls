/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : OpportunityController
 * Author          : Kalyan Kumar R
 * Created Date    : Feb 17, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Feb 17, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Feb 17, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public with sharing class OpportunityController {

	@AuraEnabled(cacheable=true) //no dmls inside this method cs limit of dml becomes zero
	public static List<Opportunity> getAllOpportunities() {
		return [SELECT Name, StageName, CloseDate, Amount
											FROM Opportunity
											WITH SECURITY_ENFORCED
											LIMIT 10
				];
	}
	@AuraEnabled(cacheable=true) //no dmls inside this method cs limit of dml becomes zero
	public static List<Opportunity> getWonOpportunities() {
		return [SELECT Name, StageName, CloseDate, Amount
											FROM Opportunity WHERE StageName = 'Closed Won'
											WITH SECURITY_ENFORCED
				];
	}

	@AuraEnabled(cacheable=true) //no dmls inside this method cs limit of dml becomes zero
	public static List<Opportunity> getLostOpportunities() {
		return [SELECT Name, StageName, CloseDate, Amount
											FROM Opportunity WHERE StageName = 'Closed Lost'
											WITH SECURITY_ENFORCED
				];
	}

	@AuraEnabled(cacheable=true) //no dmls inside this method cs limit of dml becomes zero
	public static List<Account> getAccounts() {
		return [SELECT Name,Industry,AnnualRevenue,Rating
											FROM Account
											WITH SECURITY_ENFORCED];
	}

	@AuraEnabled
	public static void deleteAccount(String accId){
		Account acc = new Account(Id=accId);
		try{
			delete acc;
		}catch(DMLexception ex){
			throw new AuraHandledException(ex.getMessage());	//Adaper pattern, what is it?
																//
		}
	}

}