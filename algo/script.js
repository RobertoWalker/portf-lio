const btn = document.getElementById("btnTopo");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            links.forEach(linkItem => linkItem.classList.remove("ativo"));
            link.classList.add("ativo");
        });
    });
};

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
