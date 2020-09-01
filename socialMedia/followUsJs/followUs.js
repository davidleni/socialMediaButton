function disableselect(e){
    return false
    }
    function reEnable(){
    return true
    }
    document.onselectstart=new Function ("return false")
    if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
    }

    function followUsMainButton() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Follow Us";
    }
    function followUsfacebook() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Facebook";
    }
    function followUsinstagram() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Instagram";
    }
    function followUslinkedin() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Linkedin";
    }
    function followUssnap() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Snapchat";
    }
    function followUstelegram() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Telegram";
    }
    function followUstwitter() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "Twitter";
    }
    function followUswhatsapp() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "WhatsApp";
    }
    function followUsyoutube() {
        document.getElementById('followUsMainButtonTxt').innerHTML = "YouTube";
    }
    

    function followUsHideAndShow() {
        var x = document.getElementById('followUsButton1');
        var y = document.getElementById('followUsButton2');
        var z = document.getElementById('followUsButton3');
        var q = document.getElementById('followUsButton4');
        var r = document.getElementById('followUsButton5');
        var u = document.getElementById('followUsButton6');
        var d = document.getElementById('followUsButton7');
        var f = document.getElementById('followUsButton8');
        
        if(x.style.display == "block" && y.style.display == "block" && z.style.display == "block" && u.style.display == "block" && d.style.display == "block" && f.style.display == "block") {
            document.getElementById('followUsButton1').style.display = "none";
            document.getElementById('followUsButton2').style.display = "none";
            document.getElementById('followUsButton3').style.display = "none";
            document.getElementById('followUsButton4').style.display = "none";
            document.getElementById('followUsButton5').style.display = "none";
            document.getElementById('followUsButton6').style.display = "none";
            document.getElementById('followUsButton7').style.display = "none";
            document.getElementById('followUsButton8').style.display = "none";
            document.getElementById('followUsMainButton').style.margin = "65px";
            document.getElementById('followUsMainButton').style.backgroundColor = "darkslategray";
            document.getElementById('followUsMainButton').style.cursor = "pointer";
        } else {
            document.getElementById('followUsButton1').style.display = "block";
            document.getElementById('followUsButton2').style.display = "block";
            document.getElementById('followUsButton3').style.display = "block";
            document.getElementById('followUsButton4').style.display = "block";
            document.getElementById('followUsButton5').style.display = "block";
            document.getElementById('followUsButton6').style.display = "block";
            document.getElementById('followUsButton7').style.display = "block";
            document.getElementById('followUsButton8').style.display = "block";
            document.getElementById('followUsMainButton').style.backgroundColor = "brown";
            document.getElementById('followUsMainButton').style.cursor = "pointer";
            document.getElementById('followUsMainButton').style.margin = "0px";
        }
    }