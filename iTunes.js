var Ariana=["","Thank You Next","7 Rings","Problem","Break Up With Your Girlfriend, I'm Bored","Bang Bang","No Tears Left to Cry","Side to Side","Break Free","Love Me Harder","Focus",
            "God is a Woman","Dangerous Woman","The Way","Beathin","Into You",
            "One last Time","Needy","NASA","Imagine","Baby I","Bloodline","Gohstin","Fake Smile","Bad Idea","In My Head"];
var Taylor=["Shake It Off","Blank Space","Bad Blood","We Are Never Gettting Back Together","Look What You Made Me do","You Belong With Me","I Knew You Were Trouble.","I Don't Wanna Live Forever","Today Was A Fairytale","Mine",
            "Love Story","...Ready For It","Wildeset Dreams","Style","Red",
            "Back To December"," Begin Again","Speak Now","Fearless","Change","Jump Then Fall","If This Was A Movie","Mean","You're Not Sorry","Delicate"];
var Rihanna=["We Found Love","Disturbia","Work","Umbrella","Love The Way you Lie","The Monster","SOS","Lve Your Life","Take A Bow","Only Girl In The World"];
var Beyonce=[""];
var Niki=[""];

function search(){

}

$.ajax({
    url: "http://itunes.apple.com/search?term=" + artist,
    dataType: "jsonp",
    success: go
});


function go(data) {
     console.log(data);
}

function select(){
    var artist1=document.getElementById("name").value;
    var number=document.getElementById("nsongs").value;
    artist=parseInt(artist1);
    num=parseInt(number);
    var art="";
    var nums="";
    if(artist==0){
        //not a artist please pick one
    }else if(artist==1){
        art= Ariana;
    }else if(artist==2){

    }else if(artist==3){

    }else if(artist==4){

    }else if(artist==5){

    }
    return art;
    return nums;
}