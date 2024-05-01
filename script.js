let message = document.getElementById("Output2");
let data = document.getElementById("input").value;
function klik() {
    document.getElementById("myAudio").autoplay;
    let data = document.getElementById("input").value;
    if (data == 'Rdme'){
        const data_array = ["gitb for My github" , "lkdn to connect My Linkedin", "ingr for MyIG"]
        let text = "<ul>"
        let data_array_length = data_array.length;
        for(let i = 0; i<data_array_length;i++){
            text += "<li>" + data_array[i] + "</li>"
        }
        text += "</ul>"
        message.innerHTML= "PLEASE READ THIS!" + text;

    } else if (data == 'About'){
        message.innerHTML = "\
        ▄▄▄· ▄▄▄▄· ▪   ▐ ▄ <br>\
       ▐█ ▀█ ▐█ ▀█▪██ •█▌▐█<br>\
       ▄█▀▀█ ▐█▀▀█▄▐█·▐█▐▐▌<br>\
       ▐█ ▪▐▌██▄▪▐█▐█▌██▐█▌<br>\
        ▀  ▀ ·▀▀▀▀ ▀▀▀▀▀ █▪<br>\
       <br>Hi I'm Abin";
       
    } else if (data == 'gitb') {
        message.innerHTML= "PLESE WAIT...." ;
        window.location.href = "https://github.com/PeGaSusEng";    
    } else if (data == 'lkdn') {
        message.innerHTML= "LOADING...." ;
        window.location.href = "https://www.linkedin.com/in/la-ode-muhammad-abin-akbar/";
    } else if (data == 'ingr '){
        message.innerHTML= "LETS GO...." ;
        window.location.href = "https://www.instagram.com/reel/Cr81yk0AyxM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D";
    } else {
        setTimeout(function() {
            message.innerText = `Error in ${data}:\nCommand not found...`;
        }, (data.length)+10000);
        const data1 = 0;
        return data1;
    
    }

}