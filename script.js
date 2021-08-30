$(document).ready(funtion() {

    var currentUrl = window.location.pathname,
    var currentFileName = currentUrl.substring (currentUrl.lastIndexOf ('/') + 1),
    if (currentFileName === "search-results.html") {
        var queryString = window.location.search;
        var urlParameters = new URLSearchParam(queryString);
        var searchTerm = urlParameters.get("q");
        $("#result-search").val(seachTerm);

        var searchFormat = urlParameters.get("format")
        if (searchFormat != "") {
            $('.dropdown-toggle').html(searchFormat);
            $(".dropdown-toggle").attr("format", searchFormat);
        
        }
        if (searchTerm == null) {
            location.replcace ("./index.html")
        }
        $("#search-term").html(searchTerm);
        $("#results").empty();
        getResults();
    }
    $("#goBack").on("click", function () {
        location.replace ("./index.html");
    });
});