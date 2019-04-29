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
    }if(number==0){
        $("#div1").hide();
        document.getElementById("div3").innerHTML="Please select the number of songs that you would like to see and try again.";
    }
    $.ajax({
        url: "http://itunes.apple.com/search?term="+artist,
        dataType: "jsonp",
        success: go
    });
}

function go(data) {
    console.log(data);
    var results="";
    if(data.results.length==0){
        $("#div1").hide();
        document.getElementById("div4").innerHTML="That search had no results. Please enter a new search term.";
    }if(data.results.length!=0&&number!=0){
        results += "<tr><td>Results:</td></tr>";
        for(i=0;i<number;i++){
            results+="<td>Rank:"+(i+1)+"</td>";
            if (data.results[i].artistName.length>=15){
                results+="<td>"+data.results[i].artistName.substring(0,15)+"...</td>";
            }else{
                results+="<td>"+data.results[i].artistName+"</td>";
            }
            if (data.results[i].collectionName.length>=15){
                results+="<td>"+data.results[i].collectionName.substring(0,15)+"...</td>";
            }else{
                results+="<td>"+data.results[i].collectionName+"</td>";
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
    $("table").empty();
    $("#div1").show();
    $("#div3").hide();
    $("#div4").hide();
    $("#div3").empty();
    $("#div4").empty();
    document.getElementById("artist").innerHTML="";
    document.getElementById("nsongs").value="0";
    //reset the artist input
}


