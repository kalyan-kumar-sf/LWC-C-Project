/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : AccountSearchController
 * Author          : Kalyan Kumar R
 * Created Date    : Feb 25, 2026
 * Last Modified By: Kalyan Kumar R
 * Last Modified On: Feb 25, 2026
 * Description     : This class implements for...... searching for the account and showing it in the Lightning Data Table
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Feb 25, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class AccountSearchController {

	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts(String accName) {

		String name = '%'+ accName + '%';

		return [SELECT Name, Industry, AnnualRevenue, Rating FROM Account 
															WHERE Name LIKE :name
															WITH SECURITY_ENFORCED];

		
	}

}