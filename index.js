const phone = document.getElementById("features_phone_img")

function changePhoneImg(feature) {
    if(window.innerWidth > 760) {
        if (feature === "list")
            phone.style = "background-image: url('media/app/desktop/list_screen.png');"
        else if (feature === "map")
            phone.style = "background-image: url('media/app/desktop/map_screen.png');"
        else if (feature === "info")
            phone.style = "background-image: url('media/app/desktop/details_screen.png');"
    }
}



