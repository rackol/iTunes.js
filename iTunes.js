var number =0;

function search(){
    var artist=document.getElementById("artist").value;
    var num=document.getElementById("nsongs").value;
    if(num=="0"){
        number==0;
    }if(num=="15"){
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
    $("#div1").hide();
    $("#div3").show();
    $("#div4").show();
    console.log(data);
    var results="";
    if(number==0){
        $("#div1").hide();
        document.getElementById("div3").innerHTML="Please select the number of songs that you would like to see and try again.";
    }
    if(data.results.length==0){
        $("#div1").hide();
        document.getElementById("div4").innerHTML="That search had no results. Please enter a new search term.";
    }if(data.results.length!=0&&number!=0){
        results += "<tr><td>Results:</td><td>Artist</td><td>Album</td><td>Song</td><td>Album cover</td><td>Listen</td></tr>";
        for(i=0;i<number;i++){
            var i1 = i+1;
            results+="<td>Rank:"+(i+1)+"</td>";
            if (data.results[i].artistName.length>=20){
                results+="<td>" +data.results[i].artistName.substring(0,20)+"...</td>";
            }else{
                results+="<td>"+data.results[i].artistName+"</td>";
            }
            if (data.results[i].collectionName.length>=20){
                results+="<td>"+data.results[i].collectionName.substring(0,20)+"...</td>";
            }else{
                results+="<td>"+data.results[i].collectionName+"</td>";
            }
            if (data.results[i].trackName.length>=20){
                results+="<td><a href='detail.html?song="+i1+"&artist="+artist+"'</a>" +data.results[i].trackName.substring(0,20)+"...</td>";
            }else{
                results+="<td><a href='detail.html?song="+i1+"&artist="+artist+"'</a>" +data.results[i].trackName+"</td>";
            }

            results+="<td><img src='"+data.results[i].artworkUrl100 +"'></td>";
            results+="<td><audio src='"+data.results[i].previewUrl +"'controls></audio></td>";
            results+="</tr>";
        }
        $("#div3").hide();
        $("#div1").hide();
        $("#div3").empty();
        $("#div4").empty();
        document.getElementById("table").innerHTML=results;
    }
}

function clearIt(){
    number=0;
    $("table").empty();
    $("#div1").show();
    $("#div3").hide();
    $("#div4").hide();
    $("#div3").empty();
    $("#div4").empty();
    document.getElementById("artist").innerHTML="";
    document.getElementById("nsongs").value="0";
}


