var song=getQueryParameter("song");
var artist=getQueryParameter("artist");

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
    var results1="";
    var results="";
    var results2="";
    var length=data.results[song].trackTimeMillis;
    var time=((length/1000)/60).toFixed(0);
    var seconds=(length/1000);
    results1+="<tr><td>Details:</td></tr>";
    results1+="<tr><td><img src='"+data.results[song].artworkUrl100+"'</td></tr>";
    results2+="<tr><td>Listen:</td></tr><tr><td><audio src='"+data.results[song].previewUrl +"'controls></audio></td></tr>";
    results+="<tr><td>Artist:</td><td>"+data.results[song].artistName+"</td></tr>";
    results+="<tr><td>Album Name:</td><td>"+data.results[song].collectionCensoredName+"</td></tr>";
    results+="<tr><td>Album Price:</td><td>$"+data.results[song].collectionPrice+"</td></tr>";
    results+="<tr><td>Format:</td><td>"+data.results[song].kind+"</td></tr>";
    results+="<tr><td>Number of songs on album:</td><td>"+data.results[song].trackCount+"</td></tr>";
    results+="<tr><td>Song Name:</td><td>"+data.results[song].trackCensoredName+"</td></tr>";
    results+="<tr><td>Song Price:</td><td>$"+data.results[song].trackPrice+"</td></tr>";
    results+="<tr><td>Release Data:</td><td>"+data.results[song].releaseDate+"</td></tr>";
    results+="<tr><td>Song Length:</td><td>"+time+":seconds</td></tr>";
    results+="</tr>";
    document.getElementById("table").innerHTML=results;
    document.getElementById("table1").innerHTML=results1;
    document.getElementById("table2").innerHTML=results2;
}

/*
artistName: "A"
artistViewUrl: "https://itunes.apple.com/us/artist/a/635168856?uo=4"
artworkUrl30: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/07/ef/75/07ef759f-ee5c-191c-86b9-0f065cd1b5e9/source/30x30bb.jpg"
artworkUrl60: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/07/ef/75/07ef759f-ee5c-191c-86b9-0f065cd1b5e9/source/60x60bb.jpg"
artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/07/ef/75/07ef759f-ee5c-191c-86b9-0f065cd1b5e9/source/100x100bb.jpg"
collectionCensoredName: "Monkey Kong"
collectionExplicitness: "notExplicit"
collectionId: 27340830
collectionName: "Monkey Kong"
collectionPrice: 9.99
collectionViewUrl: "https://itunes.apple.com/us/album/a/27340830?i=27340841&uo=4"
country: "USA"
currency: "USD"
discCount: 1
discNumber: 1
isStreamable: true
kind: "song"
previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/41/49/71/mzm.trwihfuf.aac.p.m4a"
primaryGenreName: "Rock"
releaseDate: "1999-08-16T07:00:00Z"
trackCensoredName: "A"
trackCount: 17
trackExplicitness: "notExplicit"
trackId: 27340841
trackName: "A"
trackNumber: 3
trackPrice: 0.99
trackTimeMillis: 211600
trackViewUrl: "https://itunes.apple.com/us/album/a/27340830?i=27340841&uo=4"
wrapperType: "track"
*/
