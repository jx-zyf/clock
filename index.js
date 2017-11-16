function onLoad () {
    var time = new Date();
    var hours = time.getHours();
    if (hours >= 12) hours = hours-12;
    hours = hours*30;
    var minutes = time.getMinutes()*6;
    var seconds = time.getSeconds()*6;
    document.getElementById('hour').style.transform = "rotate("+hours+"deg)";
    document.getElementById('minute').style.transform = "rotate("+minutes+"deg)";
    document.getElementById('second').style.transform = "rotate("+seconds+"deg)";
}
window.onload=function(){
    onLoad();
    setInterval(onLoad,1000);
}