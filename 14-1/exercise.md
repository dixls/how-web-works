
* What is HTTP?
    * Hyper Text Transfer Protocol
* What is a URL?
    * Universal Resource Locator
* What is DNS?
    * Domain Name Server
* What is a query string?
    * it's extra information on the end of a url to get more information
* What are two HTTP verbs and how are they different?
    * `GET` and `POST`, `GET` asks for DEEZ NUTS, where `POST` says here have DEEZ NUTS
* What is an HTTP request?
    * It's  request made to a server using HTTP
* What is an HTTP response?
    * A response from a server to a client using HTTP
* What is an HTTP header? Give a couple examples of request and response headers you have seen.
    * HTTP Headers are basically arguments you're passing in a request, these provide information that the server can use to provide a correct response, or in a response, can be used to display the correct information
    * an example could be `language` or `accepts`
* What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
    * browser recognizes that you are making a http request
        * copper wires, 1s and 0s etc
    * request (if not found sooner) is resolved to an IP address by the DNS server
    * the HTTP request for page.html is then made at the IP address associated with somesite.com
    * the browser also adds on all the requisite header information in making this request
    * the server responds by either sharing the requested information found at the given url, along with the extra information in the header, such as language
        * alternatively, if the information is not found, the server will return a bad response such as 404
    * if needed the browser will make further http requests for linked assets found in the response to the initial request


1. Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
   1.        `curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"`
2. Use dig to find what the IP address is for icanhazdadjoke.com
    1.    
        `icanhazdadjoke.com.     0       IN      A       172.67.211.64`
        `icanhazdadjoke.com.     0       IN      A       104.21.37.176`
3. Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
        it's a website!




