// page: smartwatch na web

// variables
const mTitle = document.getElementById("mTitle");

const homeB = document.querySelector(".cB#cBhome");
const tourB = document.querySelector(".cB#cBtour");
const poemB = document.querySelector(".cB#cBpoem");

let aDivs = document.getElementsByClassName("opDiv"); /* animated divs */
let bClick = 0;



// events
homeB.addEventListener("click", () => {
    bClick = 0;
    changeT();
});

tourB.addEventListener("click", () => {
    bClick = 1;
    changeT();
});

poemB.addEventListener("click", () => {
    bClick = 2;
    changeT();
})


function changeT() {
    for(let assist = 2; assist != -1; assist -= 1) {
        if (assist == bClick) {
            aDivs[assist].style.width = "25px";
            aDivs[assist].style.height = "100px";
        
        } else {
            aDivs[assist].style.width = "7.5px";
            aDivs[assist].style.height = "80px";
        }
    }

    if(bClick == 0) {
        mTitle.innerHTML = "Início"; 
        mTitle.style.color = "var(--lBlue)";

    } else if(bClick == 1) {
        mTitle.innerHTML = "Turismo";
        mTitle.style.color = "var(--dBlue)";
    
    } else {
        mTitle.innerHTML = "Poema";
        mTitle.style.color = "#f4ceff";
    }
};
