window.onload = function(){

    setTimeout(function(){

        let openSpotify = confirm(
            "🪶 Listen to Chairman's gym music on Spotify?"
        );

        if(openSpotify){

            window.open(
                "https://open.spotify.com/album/1Mo4aZ8pdj6L1jx8zSwJnt",
                "_blank"
            );

        }

    }, 1500);

}

/* JOIN BUTTON */

function joinDepartment(){

    alert(
        "Welcome to The Tortured Lifters Department 🥀"
    );

}

/* SMOOTH FADE ANIMATION ON SCROLL */

const fadeElements = document.querySelectorAll(
    ".fade-up"
);

window.addEventListener("scroll", () => {

    fadeElements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight / 1.2;

        if(position < screenPosition){

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0px)";

        }

    });

});

/* NAVBAR SHADOW ON SCROLL */

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background =
            "rgba(0,0,0,0.85)";

        nav.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.5)";

    }

    else{

        nav.style.background =
            "rgba(0,0,0,0.55)";

        nav.style.boxShadow =
            "none";

    }

});