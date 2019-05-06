
console.log(getQueryParameter("song"));
console.log(getQueryParameter("artist"));

function getQueryParameter(name){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}

function search() {
    $.ajax({
        url: "http://itunes.apple.com/search?term="+song,
        dataType: "jsonp",
        success: go
    });
}

function go(data){
    console.log(data);
    results="";
    results+="<tr><td>Deatils:</td>"
    document.getElementById("details").innerHTML=results;
}