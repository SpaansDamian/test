const toggleBtn = document.querySelector(".btn-toggle-nav");
let getSidebarUl = document.querySelector("nav ul");
toggleBtn.addEventListener("mouseenter", () => {
    getSidebarUl.style.visibility = "visible";
});

let ul = document.getElementsByTagName("ul")[0].children;

for (let i = 0; i < ul.length; i++) {
    ul[i].addEventListener("click", (e) => {
        let colour = e.target.className;
        if (e.target.className == "home") {
            colour = "whitesmoke";
        }

        document.body.style.background = colour;
        getSidebarUl.style.visibility = "hidden";
    })
};