var artist=parseInt(document.getElementById("artist").value);
var num=parseInt(document.getElementById("nsongs").value);
function search(){
    $.ajax({
        url: "http://itunes.apple.com/search?term="+artist,
        dataType: "jsonp",
        success: go
    });
}

function go(data) {
     console.log(data);
     var results="<tr><td>Results:</td>"
     for(i=0;i<num;i++){
         results+="<td>"+data[i].artistName+"</td>"
         results+="<td>"+data[i].collectionName+"</td>"
     }
     results+="</tr>"
     document.getElementById("table").innerHTML=results;
}