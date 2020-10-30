
var x;
var click;
var sms;
x = Math.floor((Math.random() * 90000) + 10000);
sms = "Congratulation! You Got The Special Access From Mr.Sigmakib.";
click = "Click Here";
function myfunction() {

    //document.getElementById("demo").innerHTML = x;

    var H = parseFloat(document.getElementById("Password").value);
    if (H == x) {

        location.href = "intro.html";
    }
    if (H !== x) {
        alert("You Type The Wrong Password! But You Got The Special Access! Your PIN Is:" + x);
        document.getElementById("demo").innerHTML = sms;
    }

}