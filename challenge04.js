/**
*
* Define 'getJSON' function that consumes the 'get' promise and chaining
* to parse data json and get the next result:
*
* Browser output:
*
* Example 1 --> getJSON('data.json', 'grano')
*
* rice
* wheat
* oats
* barley
* flour
*
* Example 2 --> getJSON('data.json', 'ice')
*
* Not Food
*
* Console ouput:
*
* Example 3 --> getJSON('data.js', 'vegetal')
*
* 'It failed! Error: Not Found'.
*
* Restrictions:
* - A chaining should parse data json.
* - Other chaining should evaluate food type and display names in english,
*   when it is not food should display 'Not Food'. When not found data file catch an
*   error and display in console 'It failed! Error: Not Found'.
* - The 'get' promise should make a GET request from data json file with
*   the following requirements:
*
*   1) Do XMLHttpRequest to get data.
*   2) Open data.
*   3) Check the status 200 and resolve the promise with the response text,
*      Otherwise reject with the status text.
*   4) Handle network error.
*   5) Make request.
*
**/


function get(data) {
  // Return a new promise.
  return new Promise(function(resolve, reject){
  // Do XMLHttpRequest
    var req = new XMLHttpRequest();
  // Open data
    req.open('GET', data);
  // Onload function
    req.onload = function(){
  // check the status 200
      if(req.status === 200){
  // Resolve the promise with the response text
        resolve(req.response);
      }
      else{
  // Otherwise reject with the status text
        reject(Error(req.statusText));
      }
    };
  // Handle network error
    req.onerror = function(){
      reject(Error("Network Error"));
    };

  // Make the request
    req.send();
  });

  //   resolve(JSON.parse("This"));
  // });
}


function getJSON(data, food) {
  get(data).
}


/*-------------------Driver Code-------------------------*/

console.log("==== challenge04 : Driver code ====");

//when it exists a food
getJSON('data.json', 'grano');
//when it does not exist
getJSON('data.json', 'ice');
//when not found data file
getJSON('data.js', 'vegetal');
