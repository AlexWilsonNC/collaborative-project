var parameters = new URLSearchParams(window.location.search); //gets the query search parameters
//parameters should look like ?q=searchTerm&format=DataFormat
var query = (parameters.has("q")) ? parameters.get("q") : null; 
var format = (parameters.has("format")) ? parameters.get("format") : null; 

//if format is blank search everything. otherwise search for just the format requested
var fetchUrl = (format!="") ? "https://www.loc.gov/" +format+ "/?q=" +query+ "&fo=json" : "https://www.loc.gov/search/?q=" +query+ "&fo=json" 

function fetchResults(url) { //gets results from api
    fetch(url)
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log(data);
    });

} 

fetchResults(fetchUrl);