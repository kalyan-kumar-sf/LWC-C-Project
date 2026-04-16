public class DummyRestCalloutTest {
	//when making callout we need endpointUrl
	//request what kind of operation you wanna perform in external system
    public static void callRest(){
        
        Http hp = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://dummy.restapiexample.com/api/v1/employees');
        req.setMethod('GET');
        HttpResponse res = hp.send(req);
        String gotData = res.getBody();
        System.debug(gotData);
    }
}