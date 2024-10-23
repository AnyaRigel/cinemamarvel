document.addEventListener('DOMContentLoaded', function() {
    const schemeSvg = document.querySelector(".scheme-svg");
    const totalPriceTag = document.querySelector(".price-total");
    const menuButton = document.querySelector(".m-menu");
    const menu = document.querySelector(".menu");
    const playButton = document.querySelector('.film-trailer');
    let cost = 800;
    let totalPrice = 0;
    schemeSvg.addEventListener('click', function(event) {
        if (!event.target.classList.contains('booked')){
            event.target.classList.toggle('active')
            let totalSeats =  schemeSvg.querySelectorAll(".active").length;
            totalPrice = totalSeats * cost;
            totalPriceTag.textContent = totalPrice;
        }
    });
    menuButton.addEventListener('click', () => {
        console.log("клик");
        menu.classList.toggle("is-open");
    });
    playButton.addEventListener("click", () => {
        Fancybox.show([
            {
              src: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
              width: 640,
              height: 360,
            },
        ]);
    
    });
});