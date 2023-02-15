const backgroundAnimation = document.querySelector(".background-animation");

const colors = [
    '#9c1614',
    '#ffffff',
    '#b54f00',
    '#74ff1d',
]

const createSquare =() =>{
    const square = document.createElement("span")
    square.classList.add("span-square")

    let size = Math.random() *40;

    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";
    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";

    // const bg = colors[Math.floor(Math.random() * colors.length)]
    // square.style.background = bg
    square.style.background = "url('/images/logo.jpg')"
    square.style.backgroundRepeat = "no-repeat"
    square.style.backgroundSize = 'cover'

    backgroundAnimation.appendChild(square)

    setTimeout(() => {
        square.remove()
    }, 5000);
}

setInterval(createSquare, 150)

