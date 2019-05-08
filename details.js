var song=console.log(getQueryParameter("song"));
var artist=console.log(getQueryParameter("artist"));

function getQueryParameter(name){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0]==name){return pair[1];}
    }
    return false;
}

function search() {
    $.ajax({
        url: "http://itunes.apple.com/search?term="+artist,
        dataType: "jsonp",
        success: go
    });
}

function go(data) {
    var results="";
    results+="<td>(song)</td>";
    results+="<td>"+data.results[song].artistName+"</td>";
    results+="<td>"+data.results[song].collectionName+"</td>";
    results+="<td><a href='detail.html?song="+i1+"&artist="+artist+"'</a>" +data.results[song].trackName+"</td>";
    results+="<td><img src='"+data.results[song].artworkUrl100 +"'></td>";
    results+="<td><audio src='"+data.results[song].previewUrl +"'controls></audio></td>";
    results+="</tr>";
    console.log(results);
    document.getElementById("details").innerHTML=results;
}