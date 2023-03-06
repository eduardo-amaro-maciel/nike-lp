VanillaTilt.init(document.querySelector("#img-tilt"), {
    max: 25,
    speed: 400,
    perspective: 1000,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll("#img-tilt"));