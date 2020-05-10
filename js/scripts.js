var d ;
var gender;
var maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var CC,YY,MM,DD;
function getInputValues(){
    var year = document.getElementById("year").value;
    var month =parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    gender =document.getElementsByName("gender").id;
    if (day<=0){
        alert("Enter valid day; between 1 and 31.");
    }
    else if (day>31){
        alert("Enter valid day; between 1 and 31.");
    }
    else if (month <= 0) {
        alert("Enter valid month; between 1 and 12.");
    }
    else if (month>12){
        alert("Enter valid month; between 1 and 12.");
    }

    else {
        DD = day;
        MM = month;
        var splitYear = year.split("");
        CC =parseInt(splitYear[0].concat(splitYear[1])) ;
        YY =parseInt(splitYear[2].concat(splitYear[3])) ;
        d= parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7);
        
        if (gender = "female"){
            alert("Your Akan name is : "+ femaleName[d]);
        }
        else if (gender = "male") {
           alert ("Your Akan name is : "+ maleName[d]);
        }
    }
    
   
   
}
