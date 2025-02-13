AOS.init();

function checkRestaurantOpen(){
    const data = new Date();
    const hora = data.getHours();
    return hora >= 8.30 && hora < 18.00;
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen();

if (isOpen) {
    spanItem.classList.remove("closed-background");
    spanItem.classList.add("open-background");
} else {
    spanItem.classList.remove("open-background");
    spanItem.classList.add("closed-background");
}
