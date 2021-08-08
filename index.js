const phone = document.getElementById("features_phone_img")

function changePhoneImg(feature) {
    if (feature === "list")
        phone.style = "background-image: url('media/app/list_screen.png');"
    else if (feature === "map")
        phone.style = "background-image: url('media/app/map_screen.png');"
    else if (feature === "info")
        phone.style = "background-image: url('media/app/details_screen.png');"
}



