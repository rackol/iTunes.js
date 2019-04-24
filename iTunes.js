var number =0;

function search(){
    var artist=document.getElementById("artist").value;
    var num=document.getElementById("nsongs").value;
    if(num=="15"){
        number=15;
    }if(num=="25"){
        number =25;
    }if(num=="50"){
        number=50;
    }
    $.ajax({
        url: "http://itunes.apple.com/search?term="+artist,
        dataType: "jsonp",
        success: go
    });
}

function go(data) {
    console.log(data);
    var results="<tr><td>Results:</td></tr>";
    for(i=0;i<number;i++){
        results += "<tr>";
        results+="<td>"+data.results[i].artistName+"</td>";
        results+="<td>"+data.results[i].collectionName+"</td>";
        results+="<td><img src='"+data.results[i].artworkUrl100 +"'></td>";
        results+="<td><audio src='"+data.results[i].previewUrl +"'controls></audio></td>";
        results += "</tr>";
    }
    document.getElementById("table").innerHTML=results;
    var finish="<button id=\"clear\" onclick=\"clear()\" class=\"w3-button w3-medium w3-white w3-hover-black w3-round-large w3-border w3-border-black\">Clear</button>";
    document.getElementById("div1").innerHTML=finish;
}

function clear(){
    document.getElementById("div1").innerHTML="Artist:\n" +
        "        <input type=\"text\" id=\"artist\" value=\"a\" size=\"15\" >\n" +
        "        <span>\n" +
        "            <select id=\"nsongs\">\n" +
        "                <option value=\"15\">15 Songs</option>\n" +
        "                <option value=\"25\">25 Songs</option>\n" +
        "                <option value=\"50\">50 Songs</option>\n" +
        "            </select>\n" +
        "        </span>\n" +
        "             <button id=\"search\" onclick=\"search()\" class=\"w3-button w3-large w3-white w3-hover-black w3-round-large w3-border w3-border-black\">Search</button>";
    document.getElementById("table").innerHTML="";
}

