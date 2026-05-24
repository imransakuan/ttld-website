/* SPOTIFY POPUP */

window.onload = function(){

    setTimeout(() => {

        const userChoice = confirm(
            "🪶 Listen to Chairman's gym music on Spotify?"
        );

        if(userChoice){

            window.location.href =
            "https://open.spotify.com/album/1Mo4aZ8pdj6L1jx8zSwJnt";

        }

    }, 1200);

};

/* JOIN BUTTON */

function joinDepartment(){

    alert(
        "Welcome to The Tortured Lifters Department 🥀"
    );

}

/* NAVBAR EFFECT */

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(0,0,0,0.92)";

        nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.45)";

    }

    else{

        nav.style.background =
        "rgba(0,0,0,0.55)";

        nav.style.boxShadow =
        "none";

    }

});

/* FADE UP */

const fadeElements =
document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

fadeElements.forEach((element) => {

    observer.observe(element);

});