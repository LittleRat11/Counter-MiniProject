let num = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const styles = event.currentTarget.classList;
            if (styles.contains("btn-danger")) {
                num--;
            } else if (styles.contains("btn-success")) {
                num++;
            } else {
                num = 0;
            }

            value.innerHTML = num;
            if (num > 0) {
                value.style.color = "green"
            } else if (num < 0) {
                value.style.color = "red"
            } else {
                value.style.color = "black"
            }
        })
    })
    // *text animation
const header = document.querySelector(".header");
const head = "Counter Project";
let start = 0;
let path = head.length;

function autoWriting() {
    header.innerHTML += head[start];
    start++;
    if (start === path) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(autoWriting, 400);