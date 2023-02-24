let popup = document.getElementById("pop-up");


function openPopup(clicked_id){
    // console.log(clicked_id);
    var str = "content-" + clicked_id;
    let info = document.getElementById(str);
    popup.classList.add("open-popup", clicked_id);
    info.classList.remove("hidden");
    info.classList.add("visible");
}

function closePopup(){

    popup.classList.remove("open-popup");
    var str = "content-" + popup.classList[1];
    // console.log(popup.classList[1]);
    let info = document.getElementById(str);
    info.classList.remove("visible");
    info.classList.add("hidden");
    popup.classList.remove(popup.classList[1]);

}